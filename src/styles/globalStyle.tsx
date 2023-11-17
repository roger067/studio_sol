import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    background-color: #F7F7F7;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
