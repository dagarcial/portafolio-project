import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
// - Outer ring rotation animation
const rotation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
// - Inner ring rotation animation (counter-clockwise)
const rotationBack = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;
// - Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components definitions
const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const LoaderRing = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 6px solid;
  border-color: ${({ theme }) => theme.colors.secondary} ${({ theme }) => theme.colors.secondary} transparent transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  &::after, &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 6px solid;
    border-color: transparent transparent ${({ theme }) => theme.colors.primary} ${({ theme }) => theme.colors.primary};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    animation: ${rotationBack} 0.5s linear infinite;
    transform-origin: center center;
  }
  &::before {
    width: 64px;
    height: 64px;
    border: 6px solid;
    border-color: ${({ theme }) => theme.colors.secondary} ${({ theme }) => theme.colors.secondary} transparent transparent;
    animation: ${rotation} 1.5s linear infinite;
  }
`;

// Main Component
const Preloader = () => {  
  return (
    <PreloaderContainer>
      <LoaderRing/>
    </PreloaderContainer>
  );
};

export default Preloader;