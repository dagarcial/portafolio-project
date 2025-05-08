import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset basics */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.family.default};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: underline;
    &:hover {
      font-style: italic;
    }
  }

  button, input, textarea {
    font-family: inherit;
    background: none;
    border: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;
