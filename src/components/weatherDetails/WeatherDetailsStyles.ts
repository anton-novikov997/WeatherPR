import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const WeatherDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid #E8EAF6;
    background-color: ${({theme}) => theme['--card-main-background-color']};

    //@media screen and (min-width: 320px) and (max-width: 768px) {
    //    width: 75%;
    //    height: 100%;
    //}
    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
        height: 100%;
    }
`
export const WeatherDetailsTextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 25%;

    @media screen and (min-width: 800px) and (max-width: 999px) {
        height: 39px;
    }
    @media screen and (min-width: 400px) and (max-width: 499px) {
        height: 7%;
    }
`
export const WeatherDetailsText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.Body_2}
    width: 25%;
    padding-bottom: 6px;
    padding-left: 4px;
    color: ${({theme}) => theme['--card-title-color']};
    text-transform: uppercase;

    @media screen and (min-width: 1000px) and (max-width: 1560px) {
        display: flex;
        justify-content: flex-start;
        padding-left: 15px;
        width: 100%;

    }
    @media screen and (min-width: 669px) and (max-width: 999px) {
        display: flex;
        justify-content: flex-start;
        padding: 10px;
        width: 100%;
    }
    @media screen and (min-width: 500px) and (max-width: 669px) {
        display: flex;
        justify-content: flex-start;
        padding: 0;
        padding-left: 10px;
        width: 100%;
        font-size: 13px;
    }
    @media screen and (min-width: 400px) and (max-width: 499px) {
        display: flex;
        justify-content: flex-start;
        padding: 0;
        padding-left: 10px;
        width: 100%;
        font-size: 13px;
    }


`
export const WeatherDetailsCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        height: 80%;
    }
`
export const WeatherDetailsCardInfo = styled.div`
    display: flex;
    width: 30%;
    height: 45%;
    border-radius: 16px;
    border: 1px solid #eee;
    background-color: ${({theme}) => theme['--card-item-background-color']};

    @media screen and (min-width: 400px) and (max-width: 499px) {
        flex-direction: column;
        align-items: center;
    }
    
    @media screen and (min-width: 800px) and (max-width: 999px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 600px) and (max-width: 799px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 600px) and (max-width: 670px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 670px) and (max-width: 699px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const CardLabel = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    padding: 15px;
    width: 100%;
    height: 50%;
    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (min-width: 1561px) and (max-width: 1621px) {
        padding: 0;
        padding-left: 10px;
    }

    @media screen and (min-width: 500px) and (max-width: 768px) {
        padding: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-align: center;
        -webkit-line-clamp: 1;
        height: 100%;
    }
    @media screen and (min-width: 400px) and (max-width: 499px) {
        padding: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-align: center;
        -webkit-line-clamp: 1;
        height: 100%;
    }
    @media screen and (min-width: 1401px) and (max-width: 1560px) {
        padding: 0;
        padding-left: 10px;
        height: 35%;
    }
    @media screen and (min-width: 1000px) and (max-width: 1400px) {
        font-size: 12px;
        padding: 5px;
    }
    @media screen and (min-width: 800px) and (max-width: 999px) {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        height: 75%;
        padding: 0;
    }
    @media screen and (min-width: 600px) and (max-width: 799px) {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        height: 52%;
        padding: 7px;
    }
    
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

`;
export const RightContainer = styled.div`
    display: flex;
    height: 100%;
    width: 30%;
    align-items: center;
    padding-left: 10px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 80%;
        padding-left: 0;
    }
    @media screen and (min-width: 1000px) and (max-width: 1386px) {
        padding-left: 0;
        align-items: flex-end;
        height: 80%;
    }
    @media screen and (min-width: 800px) and (max-width: 999px) {
        padding-left: 0;
        align-items: center;
    }
    @media screen and (min-width: 700px) and (max-width: 799px) {
        width: 100%;
        padding-left: 16px;
    }
`;

export const CardValue = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    padding-left: 17px;
    color: ${({theme}) => theme['--indicator-color']};

    @media screen and (min-width: 600px) and (max-width: 799px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 11px;
        width: 100%;
        height: 100%;
        font-size: 18px;
    }
    @media screen and (min-width: 400px) and (max-width: 499px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 11px;
        width: 100%;
        height: 100%;
        font-size: 12px;
    }
    @media screen and (min-width: 600px) and (max-width: 699px) {
        display: flex;
        align-items: center;
        padding-left: 11px;
        width: 100%;
        height: 100%;
        font-size: 15px;
    }

    @media screen and (min-width: 1225px) and (max-width: 1442px) {
        padding-left: 14px;
        font-size: 20px;
    }
    @media screen and (min-width: 1153px) and (max-width: 1224px) {
        padding-left: 14px;
        font-size: 18px;
    }
    @media screen and (min-width: 1143px) and (max-width: 1152px) {
        padding-left: 14px;
        font-size: 16px;
    }

    @media screen and (min-width: 1060px) and (max-width: 1142px) {
        padding-left: 14px;
        font-size: 15px;
    }

    @media screen and (min-width: 1000px) and (max-width: 1060px) {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 16px;
        padding-left: 13px;
    }
    @media screen and (min-width: 831px) and (max-width: 999px) {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 16px;
        padding-left: 0;
        justify-content: center;
        padding-top: 10px;
    }
    @media screen and (min-width: 800px) and (max-width: 831px) {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 14px;
        padding-left: 0;
        justify-content: center;
        padding-top: 10px;
    }
    @media screen and (min-width: 700px) and (max-width: 800px) {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 14px;
        padding-left: 0;
        justify-content: center;
        padding-top: 3px;
    }
    @media screen and (min-width: 700px) and (max-width: 754px) {
        font-size: 12px;
    }

    @media screen and (min-width: 669px) and (max-width: 700px) {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 12px;
        padding-left: 0;
        justify-content: center;
        padding-top: 3px;
    }
    @media screen and (min-width: 500px) and (max-width: 669px) {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        font-size: 12px;
        padding-left: 0;
        justify-content: center;
        padding-top: 3px;
    }


`;
