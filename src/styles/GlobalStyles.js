import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    html{
        box-sizing: border-box;
        font-size: 10px;
    }         
    body{
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        margin: 0;
        }
    a {
        color: black;
        text-decoration: none; 
    }

`;

export default GlobalStyles;
