import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

// Styled Components definitions
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;
const SvgHexagon = styled.svg`
  position: absolute;
  opacity: 0.3;
`;

// Main Component
const BackgroundHexagons = ({ observeRef }) => {
  const theme = useTheme();
  const [hexagons, setHexagons] = useState([]);
  const [height, setHeight] = useState(0);
  const hexagonStyles = [
    { fill: 'transparent', stroke: theme.colors.primary },
    { fill: theme.colors.primary, stroke: 'transparent' },
    { fill: theme.colors.accent, stroke: 'transparent' },
    { fill: 'transparent', stroke: theme.colors.secondary },
  ];
  // Get Random Integer
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  // Catch Hexagons
  useEffect(() => {
    if (!height) return;
    const numHexagons = 30; // Number of hexagons to generate
    const hexagonsArray = [];
    for (let i = 0; i < numHexagons; i++) {
      const sizeValue = getRandomInt(32,128);
      const size = `${sizeValue}px`;
      // Calculate top and left positions correctly, using sizeValue (number)
      const top = `${getRandomInt(0, height - sizeValue)}px`;
      const left = `${getRandomInt(0, window.innerWidth - sizeValue)}px`;
      // Set Style
      const style = hexagonStyles[getRandomInt(0, hexagonStyles.length - 1)];
      // List Hexagon
      hexagonsArray.push({ size, top, left, style });
    }
    setHexagons(hexagonsArray);
  }, [height]);
  // Use ResizeObserver to track height of the main container
  useEffect(() => {
    if (!observeRef?.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    observer.observe(observeRef.current);
    return () => observer.disconnect();
  }, [observeRef]);

  return (
    <BackgroundContainer>
      {hexagons.map((hex, index) => (
        <Hexagon
          key={index}
          size={hex.size}
          fill={hex.style.fill}
          stroke={hex.style.stroke}
          style={{ top: hex.top, left: hex.left }} // Apply styles here
        />
      ))}
    </BackgroundContainer>
  );
};

const Hexagon = ({ size = "800px", stroke = "#000000", fill = "transparent", top, left, ...rest }) => (
  <SvgHexagon
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ top, left }} // Apply top and left inline styles
    {...rest}
  >
    <path
      d="M1.5 4.5V10.5L7.5 14L13.5 10.5V4.5L7.5 1L1.5 4.5Z"
      stroke={stroke}
      fill={fill}
    />
  </SvgHexagon>
);

export default BackgroundHexagons;
