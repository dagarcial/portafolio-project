import styled from "styled-components";

import { SiPython, SiCplusplus, SiFortran, SiLatex, SiJavascript } from "react-icons/si";
import { TbSql } from "react-icons/tb"; 
import { SiScikitlearn, SiTensorflow, SiKeras, SiOpencv, SiNumpy, SiPandas, SiPlotly } from "react-icons/si";
import { SiAnsys, SiComsol } from "react-icons/si";
import { FaAws, FaGitAlt } from "react-icons/fa";
import { SiAmazonec2, SiAmazons3, SiDocker, SiFastapi } from "react-icons/si";
import { SiReact, SiNodedotjs, SiNextdotjs } from "react-icons/si";

import OpenFOAMIcon from "@components/tabs/home/toolsTech/icons/openfoam.svg";
import MooseIcon from "@components/tabs/home/toolsTech/icons/moose.svg";
import SimScaleIcon from "@components/tabs/home/toolsTech/icons/simscale.svg";

// Styled Components definitions
const SectionTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.base};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.ml};
  }
`;
const SubSectionTitle = styled.h4`
  margin-top: ${({ theme }) => theme.spacing.base};
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.base};
  }
`;
const ToolsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.base};
  margin-top: ${({ theme }) => theme.spacing.base};
  justify-content: flex-start;
  align-items: flex-start;
`;
const ToolItem = styled.div`
  display: flex;
  width: ${({ theme }) => theme.spacing.xxl};
  height: ${({ theme }) => theme.spacing.xxl};
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.spacing.xs} solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.sm};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.accent};
  backdrop-filter: blur(${({ theme }) => theme.spacing.xs});
  box-shadow: ${({ theme }) =>theme.shadows.bottom};
`;

// Main Component
const ToolsTech = () => {
  const listTools = {
    'Programming Languages': [
      { label: "Python", icon:SiPython},
      { label: "C++", icon:SiCplusplus},
      { label: "Fortran", icon:SiFortran},
      { label: "Latex", icon:SiLatex},
      { label: "Javascript", icon:SiJavascript},
      { label: "SQL", icon:TbSql}
    ],
    'ML & Data Science': [
      { label: "Scikitlearn", icon:SiScikitlearn},
      { label: "Tensorflow", icon:SiTensorflow},
      { label: "Keras", icon:SiKeras},
      { label: "Opencv", icon:SiOpencv},
      { label: "Numpy", icon:SiNumpy},
      { label: "Pandas", icon:SiPandas},
      { label: "Plotly", icon:SiPlotly}
    ],
    'Modeling & Simulation': [
      { label: "OpenFoam", icon:OpenFOAMIcon.src},
      { label: "SimScale", icon:SimScaleIcon.src},
      { label: "MOOSE", icon:MooseIcon.src},
      { label: "Ansys", icon:SiAnsys},
      { label: "Comsol", icon:SiComsol}
    ],
    'Cloud & MLOps': [
      { label: "Aws", icon:FaAws},
      { label: "Amazonec2", icon:SiAmazonec2},
      { label: "Amazons3", icon:SiAmazons3},
      { label: "Docker", icon:SiDocker},
      { label: "Fastapi", icon:SiFastapi},
      { label: "GitAlt", icon:FaGitAlt}
    ],
    'Web Technologies': [
      { label: "React", icon:SiReact},
      { label: "Nodedotjs", icon:SiNodedotjs},
      { label: "Nextdotjs", icon:SiNextdotjs}
    ]
  }

  return (
    <>
      <SectionTitle>Tools & Tech</SectionTitle>
      {Object.entries(listTools).map(([key, value]) => (
        <div key={key}>
          <SubSectionTitle>{key}</SubSectionTitle>
          <ToolsGrid>
            {value.map((val, index) => (
              <ToolItem key={index}>
                {typeof val.icon === 'string' ? (
                  <img src={val.icon} alt={val.label} style={{ width: '100%', filter: 'grayscale(100%)' }} />
                ) : (
                  <val.icon style={{ width: '100%', height: '100%' }} />
                )}
              </ToolItem>
            ))}
          </ToolsGrid>
        </div>
      ))}
    </>
  );
}

export default ToolsTech;