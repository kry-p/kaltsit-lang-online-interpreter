import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'MinSans-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  } 

  @font-face {
    font-family: 'MinSans-Thin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Thin.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: MinSans-Medium;
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }   
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
    background-color: rgba(178, 242, 187, 0.6);
    border-radius: 0.25rem;
  }
`;

export default GlobalStyle;
