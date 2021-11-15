import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PT Sans', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #000000; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    opacity: 0.3;
    background: #317481; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    opacity: 1;
    }
`

export default GlobalStyle