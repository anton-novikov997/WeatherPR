import styled from "styled-components";
import {ContainerStyles} from "../../reusedStyleVariables";
import {fonts} from "../../fonts/fontStyles";

export const LocationTemperatureContainer = styled.section`
    ${ContainerStyles};
    height: 25%;

    @media screen and (min-width: 600px) and (max-width: 767px) {
        width: 100%;
        height: 20%;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
        height: 20vh;
    }
    @media screen and (min-width: 500px) and (max-width: 593px) {
        height: 20%;
    }
    @media screen and (min-width: 300px) and (max-width: 499px) {
        height: 12%;
    }
`;

export const LocationDescriptionContainer = styled.div`
    flex-direction: column;
    flex: 1;
    margin-bottom: 6px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 0;
    }
    @media screen and (min-width: 600px) and (max-width: 799px) {
        flex: 0;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;

    @media screen and (min-width: 600px) and (max-width: 799px) {
        width: 100%;
    }
`;

export const TemperatureIcon = styled.img`
    width: 100px;
    height: 90px;

    @media screen and (min-width: 600px) and (max-width: 699px) {
        display: flex;
        width: 35%;
        margin-bottom: 0;
    }
`

export const TemperatureIconContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (min-width: 1000px) and (max-width: 1512px) {
        display: inline-flex;
        width: 35%;
        margin-bottom: 0;
    }

    @media screen and (min-width: 800px) and (max-width: 999px) {
        width: 40%;
    }
    @media screen and (min-width: 800px) and (max-width: 845px) {
        width: 50%;
    }
`;

export const InfoDate = styled.div`
    font-weight: normal;
    font-size: 15px;
    color: ${({theme}) => theme['--day-title-color']};
    padding: 1px 0 0 3px;
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        font-size: 13px;
    }

    @media screen and (min-width: 799px) and (max-width: 999px) {
        font-size: 12px;
        padding-left: 9px;
    }

    @media screen and (min-width: 700px) and (max-width: 799px) {
        padding-left: 0;
        font-size: 12px;
    }
    @media screen and (min-width: 500px) and (max-width: 699px) {
        white-space: nowrap;
        padding-left: 0;
        font-size: 12px;
    }
    @media screen and (min-width: 300px) and (max-width: 499px) {
        white-space: nowrap;
        padding-left: 0;
        font-size: 12px;
    }

`;

export const City = styled.div`
    ${ContainerStyles};
    height: 50%;
    font-family: ${fonts.Headline_L};
    color: ${({theme}) => theme['--day-title-color']};
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0 0 8px;

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        font-size: 35px;
    }
    @media screen and (min-width: 699px) and (max-width: 999px) {
        font-size: 25px;
        padding: 0;
    }
    @media screen and (min-width: 500px) and (max-width: 699px) {
        font-size: 20px;
        padding: 0;
    }
    @media screen and (min-width: 300px) and (max-width: 499px) {
        font-size: 20px;
        padding: 0;
    }
`;

export const Temperature = styled.div`
    display: flex;
    color: ${({theme}) => theme['--day-title-color']};
    width: 95%;
    height: 80%;
    padding-left: 5px;
    font-family: ${fonts.Headline_XL};

    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        font-size: 35px;
    }
    @media screen and (min-width: 700px) and (max-width: 999px) {
        font-size: 31px;
        padding: 0;
    }
    @media screen and (min-width: 500px) and (max-width: 699px) {
        font-size: 21px;
        padding: 0;
    }
    @media screen and (min-width: 300px) and (max-width: 499px) {
        font-size: 21px;
        padding: 0;
    }

`;