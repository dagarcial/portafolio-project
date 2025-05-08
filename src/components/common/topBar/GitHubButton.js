import styled, { useTheme } from "styled-components";

import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

// Styled Components definitions
const GitHubLink = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.primary}80;
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  font-size: ${({ theme }) => theme.spacing.base};
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease-in-out;
  transform: translateY(0);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

// Main Component
const GitHubButton = () => {
  const theme = useTheme();
  const iconSize = theme.spacing.base;
  return (
    <GitHubLink
      href="https://github.com/dagarcial/portafolio-project"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CgGitFork size={iconSize} />
      <AiFillStar size={iconSize} />
    </GitHubLink>
  );
};

export default GitHubButton;
