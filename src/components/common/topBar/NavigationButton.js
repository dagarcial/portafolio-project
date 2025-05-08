import { useState } from "react";
import styled, { useTheme } from "styled-components";

// Styled Components definitions
const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  height: fit-content;
  border-radius: ${({ theme }) => theme.spacing.sm};
  position: relative;
  overflow: hidden;
  background-color: ${({ theme, isActive }) => 
    isActive ? theme.colors.primary : 'transparent'};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    clip-path: ${({ isActive }) => 
      isActive 
        ? 'polygon(0 0, 101% 0, 101% 101%, 0 101%)' 
        : 'polygon(-1% 0, 0 0, -25% 100%, -1% 100%)'};
    transition: clip-path 0.5s cubic-bezier(.165, 0.84, 0.44, 1);
    z-index: 0;
  }
  &:hover:before {
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }
`;
const IconButton = styled.div`
  width: ${({ theme }) => theme.spacing.xl};
  height: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
const TextButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive"
})`
  position: relative;
  z-index: 1;
  font-size: ${({ theme }) => theme.spacing.base};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fonts.weight.bold : theme.fonts.weight.regular};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.background : theme.colors.primary};
  transition: color 0.5s cubic-bezier(.165, 0.84, 0.44, 1);
  ${Button}:hover & {
    color: ${({ theme }) => theme.colors.background};
  }
`;

// Main Component
const NavigationButton = ({ Icon, text, onClick, isActive }) => {
  const theme = useTheme();
  const iconSize = theme.spacing.xl;
  const [isHovered, setHovered] = useState(false);
  const iconColor = isHovered || isActive 
    ? theme.colors.background 
    : theme.colors.primary;

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-active={isActive}
      isActive={isActive}
    >
      <IconButton>
        <Icon size={iconSize} color={iconColor} />
      </IconButton>
      <TextButton isActive={isActive}>
        {text}
      </TextButton>
    </Button>
  );
};

export default NavigationButton;