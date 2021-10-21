import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --clr-light: #F4F2F4;
    --clr-bg: #683a68;
    --clr-dark: #030004;
    --clr-accent: #5a3d71;
    --ff-main: 'Inter', sans-serif;
    --ff-title: 'Poppins', sans-serif;
    --ff-accent: 'Montserrat', sans-serif;
    --fontBig: 2.4rem;
    --fontMed: 1.6rem;
    --fontSmall: 1.2rem;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #252525;
    margin-top: 15rem;
    font-family: var(--ff-main);
   
}
`;

export default GlobalStyle;
