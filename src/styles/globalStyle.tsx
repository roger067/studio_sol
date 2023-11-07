import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    background-color: #F7F7F7;
  }
`;

export default GlobalStyle;
