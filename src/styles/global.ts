import { createGlobalStyle } from 'styled-components';

import '@material/button/dist/mdc.button.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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