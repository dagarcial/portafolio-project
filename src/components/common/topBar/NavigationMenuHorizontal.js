import styled from 'styled-components';

import NavigationButton from "@components/common/topBar/NavigationButton";
import GitHubButton from "@components/common/topBar/GitHubButton";

// Styled Components definitions
const NavigationMenuContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
`;

const NavigationMenuHorizontal = ({ activeTab, handleTabChange, tabs }) => {

  return (
    <NavigationMenuContainer>
      {Object.entries(tabs).map(([key,tab],index)  => (
        <NavigationButton
            key={index}
            Icon={tab.icon}
            text={key}
            onClick={() => handleTabChange(key)}
            isActive={activeTab === key}
        />
      ))}
      <GitHubButton />
    </NavigationMenuContainer>
  );
};

export default NavigationMenuHorizontal;