// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: #333;
    background-color: #f9f9f9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyles;
