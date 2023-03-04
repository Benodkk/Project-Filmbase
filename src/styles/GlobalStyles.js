import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-size: 10px;
    }         
    body{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.6rem;
        margin: 0;
        }
    a {
        color: black;
        text-decoration: none; 
    }

`;

export default GlobalStyles;
