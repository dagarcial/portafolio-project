import Head from "next/head";
import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';

import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import Preloader from '@components/common/Preloader';
import TopBar from '@components/common/TopBar';
import BackgroundHexagons from "@components/common/BackgroundShapes";
import Home from "@/components/tabs/Home";
import Projects from "@/components/tabs/Projects";
import BottomBar from '@components/common/BottomBar';

// Styled Components definitions
const AppContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'loading'})`
  overflow-y: ${({ loading }) => (loading === true ? 'hidden' : 'auto')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TabTransitionWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'visible'})`
  display: flex;
  flex-direction: column;
  flex: 1;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

// Main Component
const PageContent = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  const [visible, setVisible] = useState(true);
  const contentRef = useRef();
  const tabs = {
    'Home':{icon:AiOutlineHome, page:Home},
    'Projects':{icon:AiOutlineFundProjectionScreen, page:Projects}
  };
  // Preloader delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  // Transition tab change
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);
  // Tab changer
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // Set Active Tab 
  const ActiveTabComponent = tabs[activeTab].page;

  return (
    <>
      <Head>
        <title>Daniel Garcia – Computational Scientist</title>
        <meta name="description" content="Portfolio of Daniel Garcia, expert in simulation and scientific computing." />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <AppContainer loading={loading} ref={contentRef}>
        <BackgroundHexagons observeRef={contentRef}/>
        {loading ? <Preloader/> : (
          <>
            <TopBar
              activeTab={activeTab}
              handleTabChange={handleTabChange}
              tabs={tabs}
            />
            <TabTransitionWrapper visible={visible}>
              <ActiveTabComponent />
            </TabTransitionWrapper>
            <BottomBar />
          </>
        )}
      </AppContainer>
    </>
  );
};

export default PageContent;