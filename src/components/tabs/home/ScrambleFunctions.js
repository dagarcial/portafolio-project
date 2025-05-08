import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Styled Components definitions
const ScrambleText = styled.div`
  white-space: nowrap;
  min-height: ${({ theme }) => theme.spacing.lg};
  .dud {
    opacity: 0.3;
  }
`;

// Main Component
const ScrambleLoop = ({ listText }) => {
  const [currentText, setCurrentText] = useState('');
  const textIndex = useRef(0);
  // Set next text to show
  const nextText = () => {
    setCurrentText(listText[textIndex.current]);
    textIndex.current = (textIndex.current + 1) % listText.length;
  };
  // Catch next text
  useEffect(() => {
    nextText();
  }, []);

  return (
    <TextScramble
      text={currentText}
      onComplete={() => {setTimeout(() => nextText(), 2000)}}
    />
  );
}

function TextScramble({ text, onComplete }) {
  const [output, setOutput] = useState('');
  const frame = useRef(0);
  const queue = useRef([]);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };
  // Catch scramble
  useEffect(() => {
    const oldText = '';
    const length = Math.max(oldText.length, text.length);
    queue.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 30);
      queue.current.push({ from, to, start, end });
    }
    frame.current = 0;
    let frameRequest;
    const update = () => {
      let output = '';
      let complete = 0;
      for (let i = 0; i < queue.current.length; i++) {
        let { from, to, start, end, char } = queue.current[i];
        if (frame.current >= end) {
          complete++;
          output += to;
        } else if (frame.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = randomChar();
            queue.current[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      const wrapper = document.createElement('div');
      wrapper.innerHTML = output;
      setOutput(wrapper.innerHTML);
      if (complete === queue.current.length) {
        onComplete?.();
      } else {
        frame.current++;
        frameRequest = requestAnimationFrame(update);
      }
    };
    update();
    return () => cancelAnimationFrame(frameRequest);
  }, [text, onComplete]);

  return (
    <ScrambleText 
      dangerouslySetInnerHTML={{ __html: output }} 
    />
  );
}

export default ScrambleLoop;