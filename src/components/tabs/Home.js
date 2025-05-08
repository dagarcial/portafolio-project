import styled from "styled-components";

import ScrambleLoop from "@components/tabs/home/ScrambleFunctions"
import MainSection from "@components/tabs/home/MainSection";
import ToolsTech from "@components/tabs/home/ToolsTech";
import Footer from "@components/tabs/home/Footer";

// Styled Components definitions
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xxxl} 0 ${({ theme }) => theme.spacing.xl} 0;
  margin: 0 ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.xxl};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.lg};
  }
`;
const TitleSection = styled.section`
  text-align: center;
`;
const Name = styled.div`
  font-size: ${({ theme }) => theme.spacing.xxl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.xl};
  }
`;
const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.spacing.xl};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.lg};
  }
`;
const MainContent = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const LeftPanel = styled.div`
  flex: 1 1 65%;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.base};
  font-size: ${({ theme }) => theme.spacing.ml};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.base};
  }
`;
const CentralPanel= styled.div`
  flex: 0 0 5%;
`;
const RightPanel = styled.div`
  flex: 0 0 30%;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.base};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex: 1 1 100%;
    min-width: 300px;
  }
`;

// Main Component
const Home = () => {
  const myName = 'Daniel Garcia'
  const myTitles = [
    'Computational Scientist',
    'Data Scientist',
    'Applied Mathematician',
    'Numerical Simulation Expert'
  ];

  return (
    <Container>
      <TitleSection>
        <Name>{myName}</Name>
        <TitleContainer>
          <ScrambleLoop listText={myTitles}/>
        </TitleContainer>
      </TitleSection>
      <MainContent>
        <LeftPanel>
          <MainSection />
        </LeftPanel>
        <CentralPanel>
        </CentralPanel>
        <RightPanel>
          <ToolsTech />
        </RightPanel>
      </MainContent>
      <Footer />
    </Container>
  );
}

export default Home;
