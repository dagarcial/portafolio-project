import { useRouter } from "next/router";
import styled, { css, useTheme } from "styled-components";

// Styled Components definitions
const ProjectContainer = styled.button`
  position: relative;
  width: 15rem;
  height: 15rem;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: transparent;
  backdrop-filter: blur(${({ theme }) => theme.spacing.xs});
  border-radius: ${({ theme }) => theme.spacing.sm};
  border: ${({ theme }) => theme.spacing.xs} solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.box};
  transition: background-color 0.3s ease;
  &:hover {
    transform: none;
  }
`;
const ContainerBase = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;
const PreHoverHoverable = styled.div`
  ${ContainerBase};
  z-index: 1;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.md};
  opacity: 1;
  ${ProjectContainer}:hover & {
    opacity: 0;
  }
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;
const PreHoverTouch = styled.div`
  ${ContainerBase};
  gap: ${({ theme }) => theme.spacing.lg};
  @media (hover: hover) and (pointer: fine) {
    display: none;
  }
`;
const PostHover = styled.div`
  ${ContainerBase};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.box};
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  z-index: 2;
  opacity: 0;
  transition: clip-path 1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s ease-in-out;
  ${ProjectContainer}:hover & {
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
    opacity: 1;
  }
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
const ProjectNameHoverable = styled.h2`
  margin: 0;
  transition: transform 0.5s ease-in-out;
  ${ProjectContainer}:hover & {
    transform: translateY(${({ theme }) => theme.spacing.xs});
  }
`;
const ProjectNameTouch = styled.h3`
  margin: 0;
`;
const DescriptionHoverable = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.spacing.ml}
`;
const DescriptionTouch = styled.p`
  text-align: left;
`;

// Main Component
const ProjectBox = ({ project }) => {
  const theme = useTheme();
  const router = useRouter();
  const handleClick = () => {router.push({pathname: project.path})};

  return (
    <ProjectContainer onClick={handleClick}>
      <PreHoverHoverable>
        <project.icon size={theme.spacing.xxl} />
        <ProjectNameHoverable>{project.name}</ProjectNameHoverable>
      </PreHoverHoverable>
      <PreHoverTouch>
        <LabelContainer>
          <project.icon size={theme.spacing.xl} />
          <ProjectNameTouch>{project.name}</ProjectNameTouch>
        </LabelContainer>
        <DescriptionHoverable>{project.description}</DescriptionHoverable>
      </PreHoverTouch>
      <PostHover>
        <ProjectNameHoverable>{project.name}</ProjectNameHoverable>
        <DescriptionTouch>{project.description}</DescriptionTouch>
      </PostHover>
    </ProjectContainer>
  );
};

export default ProjectBox;
