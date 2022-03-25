import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
  input, select, textarea, button {
    font-family:inherit;
  }

  html {
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }
  body {
    background: ${({ theme }: { theme: any }) => theme.lwContrast};
    font-family: Plus Jakarta Sans, Helvetica, Arial, Roboto, sans-serif;
    margin: 0;
    height: 100%;
    min-height: -webkit-fill-available;
  }
`;
