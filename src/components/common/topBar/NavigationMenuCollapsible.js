import { useState } from 'react';
import styled from 'styled-components';

import NavigationButton from "@components/common/topBar/NavigationButton";
import GitHubButton from "@components/common/topBar/GitHubButton";

// Styled Components definitions
const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const MenuToggle = styled.button`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.xs};
`;
const Line = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive"
})`
  width: ${({ theme }) => theme.spacing.xl};
  height: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.colors.xs};
  transition: transform 0.3s ease, opacity 0.3s ease;
  &:nth-child(1) {
    transform: ${({ isActive }) => isActive ? 'rotate(45deg) translateY(7px)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    opacity: ${({ isActive }) => isActive ? '0' : '1'};
  }
  &:nth-child(3) {
    transform: ${({ isActive }) => isActive ? 'rotate(-45deg) translateY(-7px)' : 'rotate(0)'};
  }
`;
const ScrollableMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive"
})`
  position: absolute;
  top: 100%;
  right: 0;
  width: fit-content;
  height: fit-content;
  overflow-y: auto;
  gap: ${({ theme }) => theme.spacing.base};
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(${({ theme }) => theme.spacing.xs});
  box-shadow: ${({ theme }) => theme.shadows.bottom};
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

const NavigationMenuCollapsible = ({ handleTabChange, tabs }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <MenuContainer>
      <MenuToggle onClick={handleToggleMenu}>
        <Line isActive={isMenuOpen} />
        <Line isActive={isMenuOpen} />
        <Line isActive={isMenuOpen} />
      </MenuToggle>
      <ScrollableMenu isActive={isMenuOpen}>
        {Object.entries(tabs).map(([key,tab],index)  => (
          <NavigationButton
            key={index}
            Icon={tab.icon}
            text={key}
            onClick={() => handleTabChange(key)}
            isActive={false}
          />
        ))}
        <GitHubButton />
      </ScrollableMenu>
    </MenuContainer>
  );
};

export default NavigationMenuCollapsible;
