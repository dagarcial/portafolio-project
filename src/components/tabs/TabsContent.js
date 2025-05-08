import React, { useMemo, Suspense, lazy } from 'react';
import styled from 'styled-components';

import Preloader from '@components/common/Preloader';

// Styled Components definitions
const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

// Main Component
const TabsContent = ({ activeTab, handleTabChange }) => {
  const TabContent = useMemo(() => {
    try {
      return lazy(() => import(`@components/tabs/${activeTab}`));
    } catch (err) {
      console.error(`Error loading tab: ${activeTab}`, err);
      return null;
    }
  }, [activeTab]);
  
  return (
    <TabContainer>
      <Suspense fallback={<Preloader />}>
        {TabContent ? <TabContent handleTabChange={handleTabChange} /> : <div>Tab not found</div>}
      </Suspense>
    </TabContainer>
  );
};

export default TabsContent;