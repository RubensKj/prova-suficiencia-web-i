import { createGlobalStyle } from 'styled-components';

import '@material/react-button/dist/button.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-fab/dist/fab.css';
import '@material/react-line-ripple/dist/line-ripple.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-typography/dist/typography.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: calc(100% - 66px);
  }

  body {
    font: 16px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  button, p, a, input, span {
    font: 16px 16px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;