import React from "react";
import styled from "styled-components";

import { BsHexagonFill } from "react-icons/bs";

// Styled Components definitions
const LogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
const HexagonIcon = styled(BsHexagonFill)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;
const LogoText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing.md};
  color: white;
  pointer-events: none;
`;

// Main Component
const LogoIcon = ({size="48px"}) => {
  return (
    <LogoWrapper size={size}>
      <HexagonIcon />
      <LogoText>DG</LogoText>
    </LogoWrapper>
  );
};

export default LogoIcon;
