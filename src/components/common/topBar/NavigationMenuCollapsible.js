import { useState } from 'react';
import styled from 'styled-components';

import NavigationButton from "@/components/common/topBar/NavigationButtonCollapsible";
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
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "scrolled"
})`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: ${({ theme }) => theme.spacing.xxl};
  right: 0;
  width: 50%;
  gap: ${({ theme }) => theme.spacing.base};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.bottom};
`;
const GitHubButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const NavigationMenuCollapsible = ({ activeTab, handleTabChange, tabs, scrolled, isMenuOpen, setMenuOpen }) => {
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const handleButtonClick = (key) => {
    handleTabChange(key);
    setMenuOpen(false); // Close menu on selection
  };
  
  return (
    <MenuContainer>
      <MenuToggle onClick={handleToggleMenu}>
        <Line isActive={isMenuOpen} />
        <Line isActive={isMenuOpen} />
        <Line isActive={isMenuOpen} />
      </MenuToggle>
      <ScrollableMenu isActive={isMenuOpen} scrolled={scrolled} >
        {Object.entries(tabs).map(([key,tab],index)  => (
          <NavigationButton
            key={index}
            Icon={tab.icon}
            text={key}
            onClick={() => handleButtonClick(key)}
            isActive={activeTab === key}
          />
        ))}
        <GitHubButtonContainer>
          <GitHubButton />
        </GitHubButtonContainer>
      </ScrollableMenu>
    </MenuContainer>
  );
};

export default NavigationMenuCollapsible;
