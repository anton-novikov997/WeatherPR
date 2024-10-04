import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const WeekForecastWrapper = styled.section`
    display: flex;
    background-color: ${({theme}) => theme['--card-main-background-color']};
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 18px;

    @media screen and (min-width: 600px) and (max-width: 665px) {
        height: 93%;
    }

    //@media screen and (min-width: 992px) and (max-width: 1200px) {
    //   height: 100%;
    //}

`
export const DaysForecastText = styled.div`
    margin: 15px 24px 23px 23px;
    font-family: ${fonts.Body_2};
    color: ${({theme}) => theme['--card-title-color']};
    text-transform: uppercase;

    @media screen and (min-width: 500px) and (max-width: 699px) {
        margin: 0;
    }
`
export const WeekForecastTextContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (min-width: 500px) and (max-width: 699px) {
        padding: 0;
        padding-left: 12px;
    }
    @media screen and (min-width: 300px) and (max-width: 500px) {
        padding: 0;
        padding-left: 12px;
    }
`
export const WeekForecastContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 88%;
    border: ${({theme}) => theme['--border-style']};
    background-color: ${props => props.theme['--card-item-background-color']};
`
export const WeekForecastCardContent = styled.div`
    display: flex;
    width: 100%;
    height: 15%;

    &:not(:last-child) {
        border-bottom: 1px solid #D0D0D0;
    }

    @media screen and (min-width: 600px) and (max-width: 665px) {
        height: 14%;
    }
`
export const WeekForecastCardDatesContainer = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    height: 100%;
    @media screen and (min-width: 500px) and (max-width: 665px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
export const WeekForecastCardDate = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: ${fonts.Body};
    padding-top: 10px;
    padding-left: 19px;
    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (min-width: 1000px) and (max-width: 1292px) {
        font-size: 12px;
    }
    @media screen and (min-width: 800px) and (max-width: 999px) {
        font-size: 12px;
    }
    @media screen and (min-width: 700px) and (max-width: 799px) {
        padding-left: 10px;
    }
    @media screen and (min-width: 500px) and (max-width: 699px) {
        padding-top: 1px;
        font-size: 13px;
        padding-left: 20px;
        white-space: nowrap;
    }
    @media screen and (min-width: 500px) and (max-width: 528px) {
        padding-top: 1px;
        font-size: 13px;
        padding-left: 20px;
        align-items: center;
        white-space: nowrap;
    }

`
export const WeekForecastCardDay = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: ${fonts.Body};
    padding-left: 19px;
    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (min-width: 1000px) and (max-width: 1292px) {
        font-size: 12px;
    }
    @media screen and (min-width: 800px) and (max-width: 999px) {
        font-size: 12px;
    }
    @media screen and (min-width: 700px) and (max-width: 799px) {
        padding-left: 6px;
    }
    @media screen and (min-width: 600px) and (max-width: 699px) {
        font-size: 13px;
        padding-left: 5px;
    }
    @media screen and (min-width: 500px) and (max-width: 528px) {
        align-items: center;
        padding-left: 8px;
    }

`
export const WeekForecastCardIconContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const ForecastIcon = styled.img`
    width: 40px;
    height: 40px;
`;
export const WeekForecastCardTemp = styled.div`
    font-size: 13px;
`
export const WeekForecastCardTempContainer = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    align-items: center;
    padding-left: 9px;

    color: ${({theme}) => theme['--card-title-color']};

    @media screen and (min-width: 768px) and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        padding-left: 0;
    }
    @media screen and (min-width: 600px) and (max-width: 767px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding-left: 0;
    }
    @media screen and (min-width: 500px) and (max-width: 528px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding-left: 0;
    }

}
`
export const IconDescription = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme['--card-title-color']};
    font-size: 17px;

    @media screen and (min-width: 845px) and (max-width: 999px) {
        font-size: 13px;
    }
    @media screen and (min-width: 800px) and (max-width: 845px) {
        font-size: 13px;
        padding-right: 2px;
    }
    @media screen and (min-width: 700px) and (max-width: 799px) {
        font-size: 13px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1084px) {
        font-size: 13px;
    }
    @media screen and (min-width: 500px) and (max-width: 699px) {
        font-size: 14px;
    }


`
