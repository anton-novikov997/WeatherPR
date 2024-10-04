import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        transition: all 0.25s linear;
        display: flex;
        justify-content: center;
        align-content: center;
        font-family: "Nunito", sans-serif;
        
        //@media screen and (min-width: 320px) and (max-width: 1900px) {
        //   width: 100%;
        //   height: 100%;
        //}
    }
`;
