import styled from "styled-components";
import { PiWarningCircleLight } from "react-icons/pi";

// Styled Components
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  margin: 0 ${({ theme }) => theme.spacing.xxl};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 ${({ theme }) => theme.spacing.lg};
  }
`;
const Icon = styled(PiWarningCircleLight)`
  font-size: ${({ theme }) => theme.spacing.xxxl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.spacing.ml};
  color: ${({ theme }) => theme.colors.text};
  max-width: 30rem;
`;

// Main Component
const UnderConstruction = () => {
  return (
    <Container>
      <Icon />
      <Title>Projects Page Under Construction</Title>
      <Subtitle>
        I'm currently working on some exciting projects. This section will be updated soon!
      </Subtitle>
    </Container>
  );
};

export default UnderConstruction;
