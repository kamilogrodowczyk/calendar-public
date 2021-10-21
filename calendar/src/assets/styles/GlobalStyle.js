import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 14px;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    a, button, select {
        font-family: 'Merriweather Sans', sans-serif;
    }

    /* p {
        font-size: ${({ theme }) => theme.fontSizes.primary};
        margin-bottom: 2rem;
        letter-spacing: .5px;
        line-height: 1.5;
    } */

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
        /* text-transform: uppercase; */
        font-weight: 800;
        letter-spacing: 1px;
        margin-bottom: 1rem;
        line-height: 1.1;
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        font-weight: 700;
        margin-bottom: 1.2rem;
        line-height: 1.2;
    }
    h3 {
        font-size: ${({ theme }) => theme.fontSizes.primary};
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.3;
    }
`;
