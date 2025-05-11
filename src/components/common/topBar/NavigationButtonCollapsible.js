import { useState } from "react";
import styled, { useTheme } from "styled-components";

// Styled Components definitions
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  height: fit-content;
  background-color: transparent;
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
    isActive ? theme.colors.primary : theme.colors.accent};
`;

// Main Component
const NavigationButton = ({ Icon, text, onClick, isActive }) => {
  const theme = useTheme();
  const iconSize = theme.spacing.xl;
  const iconColor = isActive 
    ? theme.colors.primary 
    : theme.colors.accent;

  return (
    <Button onClick={onClick} >
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