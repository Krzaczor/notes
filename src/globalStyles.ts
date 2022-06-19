import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *:after {
        margin: 0;
        box-sizing: border-box;
        transition: background-color 0.1s linear, color 0.1s linear;
    }

    html {
        --color-primary: #3D6FC3;
        --color-danger: #FF3131;
        --color-success: #0FA958;
        --color-info: #DCAD08;
        --color-light: #F4F4F4;
        --color-gray: #888888;

        /* dark mode */
        --color-background-darkest: #161616;
        --color-background-middle: #2B2B2B;
        --color-background: #363636;
        --color-input-background: #4E4E4E;
        --color-input-text: #A8A8A8;
        --color-text: #F4F4F4;

        /* light mode */
        &.light-mode {
            --color-background-darkest: #D4D4D4;
            --color-background-middle: #E9E9E9;
            --color-background: #F4F4F4;
            --color-input-background: #D4D4D4;
            --color-input-text: #676767;
            --color-text: #050505;
        }

        --radius: 5px;
        --radius-round: 100px;
        --padding-container: 10px;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #root {
        height: 100%;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
