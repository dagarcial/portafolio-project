import styled, { useTheme } from 'styled-components';

import { MdHexagon } from "react-icons/md";

// Styled Components definitions
const SectionTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.base};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.ml};
  }
`;
const Paragraph = styled.p`
  margin-top: ${({ theme }) => theme.spacing.base};
`;
const HighlightsItem = styled.div`
  display: block;
  padding: ${({ theme }) => theme.spacing.base};
  margin-top: ${({ theme }) => theme.spacing.base};
  border: ${({ theme }) => theme.spacing.xs} solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.sm};
  background-color: transparent;
  backdrop-filter: blur(${({ theme }) => theme.spacing.xs});
  box-shadow: ${({ theme }) =>theme.shadows.bottom};
`;
const HighlightTitle = styled.h4`
  margin-top: ${({ theme }) => theme.spacing.base};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.base};
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.base};
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
const Bullet = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color:${({ theme }) => theme.colors.primary};
`;

// Main Component
const MainSection = () => {
  const theme = useTheme();
  const aboutMeText = `
  Computational Scientist with a Ph.D. in Applied Mathematics and over 8 years of 
  experience across **scientific computing**, **machine learning**, and **inverse modeling**. 
  Specialized in combining **data-driven techniques** with physics-based simulation to 
  tackle complex biomedical, geophysical, and environmental challenges. Proficient 
  in designing **ML and inverse modeling pipelines**, deploying solutions with 
  **Docker and AWS**, and integrating predictive analytics into real-world applications. 
  Passionate about bridging numerical solvers with modern **ML frameworks** to build 
  impactful and reproducible scientific tools.
  `;
  const highlights = {
    'Accelerated Drug Discovery with GPU Virtual Screening' : [
      'Built a high-performance virtual screening pipeline using Python, RDKit, and VinaGPU.',
      'Achieved 30× speedup and over 70% accuracy in drug candidate prediction.',
      'Deployed models via AWS (S3, EC2) and Docker.',
    ],
    'AI-Driven Brain MRI Preprocessing': [
      'Designed a preprocessing pipeline for neuroimaging data using NiBabel and deep learning-based segmentation.',
      'Integrated pipeline into predictive health dashboards for non-technical teams.'
    ],
    'Inverse Modeling in Hydrogeology' : [
      'Developed algorithms in Python and Fortran to estimate subsurface parameters from real-world data.',
      'Modeled porosity and seawater intrusion using FEniCS and MODFLOW.',
    ],
    'Real-Time Electromagnetic Simulation': [
      'Designed solver-based IGA strategies and finite element methods for geophysical well logging and signal correction.',
      'Implemented real-time estimation using PETSc and C.'
    ]
  };
  const parseBoldText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} style={{ color: theme.colors.background.accent }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      <SectionTitle>About Me</SectionTitle>
      <Paragraph>{parseBoldText(aboutMeText)}</Paragraph>
      <SectionTitle>Highlights</SectionTitle>
      {Object.entries(highlights).map(([key, value], index) => (
        <HighlightsItem key={index}>
          <HighlightTitle>{key}</HighlightTitle>
          <List>
            {value.map((text, index) => (
              <ListItem key={index}>
                <Bullet><MdHexagon size={theme.spacing.base} /></Bullet>
                {text}
              </ListItem>
            ))}
          </List>
        </HighlightsItem>
      ))}
    </>
  );
}

export default MainSection;