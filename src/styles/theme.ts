/**
 * Global theme
 */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  body {
    font-family: GowunDodum-Regular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
  }

  button, textarea {
    font-family: GowunDodum-Regular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  div {
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
