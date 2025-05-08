import styled, { useTheme } from "styled-components";

import { FaLinkedin, FaGithub, FaOrcid, FaGoogleScholar } from "react-icons/fa6";

// Styled Components definitions
const BottomBarStyle = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.accent};
`;
const Panel = styled.div`
  display: flex;
  flex: 1 1 33%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.base};
  font-size: ${({ theme }) => theme.spacing.base};
  color: ${({ theme }) => theme.colors.background};
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.base};
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.background};
  }
`;

// Main Component
const BottomBar = () => {
  let date = new Date();
  let year = date.getFullYear();
  const theme = useTheme();
  const iconSize = theme.spacing.lg;
  const listLinks = [
    {link:'https://www.linkedin.com/in/daniel-garcia-l',icon:FaLinkedin},
    {link:'https://github.com/dagarcial',icon:FaGithub},
    {link:'https://orcid.org/0000-0002-5092-5445',icon:FaOrcid},
    {link:'https://scholar.google.com/citations?hl=en&user=vqe7wdsAAAAJ',icon:FaGoogleScholar},
  ];

  return (
    <BottomBarStyle>
      <Panel></Panel>
      <Panel>Copyright © {year}</Panel>
      <Panel>
        <Icons>
          {listLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon size={iconSize} />
            </a>
          ))}
        </Icons>
      </Panel>
    </BottomBarStyle>
  );
};

export default BottomBar;