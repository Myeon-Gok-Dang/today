import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body, h1, img  {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: white;
    font-size: 62.5%;
    /* font-family: 'Apple SD Gothic Neo' !important; */
    font-family: 'Noto Sans KR', sans-serif !important;
    &::-webkit-scrollbar {
    display: none; 
  }
  }

  .noneScroll {
    &::-webkit-scrollbar {
    display: none;
  }
  }

  .noneXScroll {
    overflow-x: hidden;
  }
  * {
    outline: none;
  }
  a {
  text-decoration: none;
  color: inherit;
  }

  input:focus {
    outline: none;
  }
`;
