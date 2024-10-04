import styled from "styled-components";

export const WeatherUnionContainer = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    padding: 20px 20px 0;

    @media screen and (min-width: 992px) and (max-width: 1300px) {
        align-items: normal;
        width: 100%;
        height: 100%;
        margin-left: 0;
        padding-top: 20px;
    }
    @media screen and (min-width: 300px) and (max-width: 699px) {
        padding: 0;
    }

`
export const WeatherUnionInfoContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 37px;

    //margin-left: 94px;

    @media screen and (min-width: 728px) and (max-width: 752px) {
        gap: 30px;
    }
    @media screen and (min-width: 718px) and (max-width: 728px) {
        gap: 25px;
    }
    @media screen and (min-width: 700px) and (max-width: 718px) {
        gap: 20px;
    }
    @media screen and (min-width: 669px) and (max-width: 699px) {
        gap: 10px;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 0 0 0;
    }
    @media screen and (min-width: 300px) and (max-width: 669px) {
        gap: 10px;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    //@media screen and (min-width: 768px) and (max-width: 992px) {
    //    width: 100vw;
    //    height: 100vh;
    //    margin-left: 30px;
    //}
`
export const WeatherTownInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    gap: 24px;


    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 50%;
        height: 100%;
        gap: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1300px) {
        width: 50%;
        height: 100%;
        flex: 1;
        gap: 0;
    }
    @media screen and (min-width: 700px) and (max-width: 767px) {
        width: 50%;
        height: 100%;
        flex: 1;
        gap: 0;
    }
    @media screen and (min-width: 669px) and (max-width: 699px) {
        width: 45%;
    }
    @media screen and (min-width: 300px) and (max-width: 669px) {
        width: 100%;
        gap: 10px
    }


`
export const WeekForecastContainer = styled.section`
    display: flex;
    width: 30%;
    border-radius: 17px;
    height: 100%;

    @media screen and (min-width: 1000px) and (max-width: 1494px) {
        width: 36%;
    }
    @media screen and (min-width: 800px) and (max-width: 999px) {
        width: 45%;
    }
    @media screen and (min-width: 800px) and (max-width: 845px) {
        width: 45%;
    }
    @media screen and (min-width: 700px) and (max-width: 799px) {
        width: 55%;
    }
    @media screen and (min-width: 669px) and (max-width: 699px) {
        width: 204px;
    }
    @media screen and (min-width: 500px) and (max-width: 669px) {
        width: 100%;
    }
    @media screen and (min-width: 400px) and (max-width: 499px) {
        width: 100%;
    }
    //
    //@media screen and (min-width: 768px) and (max-width: 992px) {
    //    height: 80%;
    //    width: 40%;
    //}
`
export const ForeCastContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 24px;

    @media screen and (min-width: 320px) and (max-width: 669px) {
        width: 100%;
        flex-direction: column;
        gap: 5px;
    }

    //@media screen and (min-width: 992px) and (max-width: 1900px) {
    //    width: 100%;
    //    height: 100%;
    //    gap: 24px;
    //}

`