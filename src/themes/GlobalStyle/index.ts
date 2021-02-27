import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  /* full height layout */
  html,
  body {
    /* background: ${({ theme }) => `${theme.colors.light.background.light.color}`}; */
    background: ${({ theme }) => theme.colors[theme.mode].background.light.color};

    display: flex;
    min-height: 100vh;
    width: 100%;
    transition: all 200ms ease-in-out;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
