import styled from "styled-components";

export const AppWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme['--app-background-color']};
    padding: 31px;
    height: 80vh;
    width: 65vw;

    //@media screen and (min-width: 320px) and (max-width: 999px) {
    //    width: 100vw;
    //    height: 100vh;
    //}
    //
    //@media screen and (min-width: 768px) and (max-width: 992px) {
    //    width: 100%;
    //    height: 100%;
    //}
    //
    //@media screen and (min-width: 992px) and (max-width: 1900px) {
    //    width: 100%;
    //    height: 100%;
    //    //padding-right: 10px;
    //}
`