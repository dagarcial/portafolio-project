import styled from "styled-components";

import { PiProjectorScreenChart } from "react-icons/pi";
import ProjectBox from "@components/tabs/project/ProjectBox";
import UnderConstruction from "@components/tabs/project/UnderConstruction";

// Styled Components definitions
const Container = styled.div`
  flex: 1;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xxxl} 0 ${({ theme }) => theme.spacing.xl} 0;
  margin: 0 ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.xxl};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.lg};
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 25rem));
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

// Main Component
const Projects = () => {
  const projects = [
    //{name:'Text',icon:PiProjectorScreenChart,description:'description',path:'api?'}
  ];

  return (
    <Container>
      {projects.length === 0 ? (
        <UnderConstruction />
      ) : (
        <Grid>
          {projects.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Projects;
