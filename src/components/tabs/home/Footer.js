import styled, { useTheme } from "styled-components";

import { FaLinkedin, FaGithub, FaOrcid, FaGoogleScholar } from "react-icons/fa6";

// Styled Components definitions
const FooterSection = styled.footer`
  text-align: center;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.base};
  font-size: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.lg};
  a {
    color: inherit;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

// Main Component
const Footer = () => {
  const theme = useTheme()
  const iconSize = theme.spacing.xxl;
  const listLinks = [
    {link:'https://www.linkedin.com/in/daniel-garcia-l',icon:FaLinkedin},
    {link:'https://github.com/dagarcial',icon:FaGithub},
    {link:'https://orcid.org/0000-0002-5092-5445',icon:FaOrcid},
    {link:'https://scholar.google.com/citations?hl=en&user=vqe7wdsAAAAJ',icon:FaGoogleScholar},
  ];

  return (
    <FooterSection>
    <h3>Find me on:</h3>
    <Icons>
      {listLinks.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
          <item.icon size={iconSize}/>
        </a>
      ))}
    </Icons>
    </FooterSection>
  );
}

export default Footer;
