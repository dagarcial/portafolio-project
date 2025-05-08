import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import LogoIcon from "@components/common/LogoIcon";
import NavigationMenuCollapsible from "@components/common/topBar/NavigationMenuCollapsible";
import NavigationMenuHorizontal from "@components/common/topBar/NavigationMenuHorizontal";

// Styled Components definitions
const TopBarStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled'})`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  transition: all 0.3s ease-out;
  background-color: transparent;
  backdrop-filter: ${({ scrolled, theme }) => 
    scrolled ? `blur(${theme.spacing.xs})` : "none"};
  box-shadow: ${({ scrolled, theme }) =>
    scrolled ? theme.shadows.bottom : "none"};
`;

// Main Component
const TopBar = ({ activeTab, handleTabChange, tabs }) => {
  const theme = useTheme();
  const iconSize = theme.spacing.xl;
  const [scrolled, setScrolled] = useState(false);
  const [isCompactView, setIsCompactView] = useState(false);
  // Catch scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Check for screen size and update on resize
  useEffect(() => {
    const checkScreenSize = () => {
      const breakpointValue = parseInt(theme.breakpoints.medium,10);
      const isCompact = window.innerWidth < breakpointValue;
      setIsCompactView(isCompact);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [theme.breakpoints.medium]);

  return (
    <TopBarStyle scrolled={scrolled}>
      <LogoIcon size={iconSize} />
      {isCompactView ? (
        <NavigationMenuCollapsible
          handleTabChange={handleTabChange}
          tabs={tabs}
        />
      ) : (
        <NavigationMenuHorizontal
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          tabs={tabs}
        />
      )}  
    </TopBarStyle>
  );
};

export default TopBar;