import styled from "styled-components";
import {fonts} from "../../fonts/fontStyles";

export const ForecastWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 22px;
    padding: 15px;
    border: ${({theme}) => theme['--border-style']};;
    background-color: ${({theme}) => theme['--card-main-background-color']};

    @media screen and (min-width: 300px) and (max-width: 669px) {
        padding: 2px;
        width: 100%;
    }

    //
    //@media screen and (min-width: 768px) and (max-width: 992px) {
    //    width: 100%;
    //    height: 20vh;
    //}
    //
    //@media screen and (min-width: 992px) and (max-width: 1900px ) {
    //    width: 100%;
    //    height: 20vh;
    //}
`
export const ForecastContainer = styled.div`
    display: flex;
    overflow-x: hidden;
    padding: 10px;
    border-radius: 8px;
    position: relative;
    margin-top: 6px;

    @media screen and (min-width: 800px) and (max-width: 999px ) {
        padding: 0;
    }
    @media screen and (min-width: 500px) and (max-width: 699px ) {
        padding: 0;
    }
    @media screen and (min-width: 400px) and (max-width: 499px ) {
        padding: 0;
    }
`;
export const ForecastTextContainer = styled.div`
    display: flex;
    border-radius: 8px;
    color: ${({theme}) => theme['--card-title-color']};
    font-family: ${fonts.Body_2};
    text-transform: uppercase;

    @media screen and (min-width: 500px) and (max-width: 699px) {
        font-size: 13px;
        padding-left: 10px ;
    }
    @media screen and (min-width: 300px) and (max-width: 499px) {
        font-size: 13px;
        padding-left: 10px ;
    }
`;

export const ScrollArea = styled.div`
    display: flex;
    transition: transform 0.3s ease;
`;
export const WeatherForecastIcon = styled.img`
    width: 30px;
    height: 30px;
`
export const ForecastItemContainer = styled.div`
    display: inline-block;
    margin-left: 10px;
    text-align: center;
    border-radius: 8px;
    width: 95px;
    height: 108px;
    background-color: ${({theme}) => theme['--card-item-background-color']};
    font-family: ${fonts.Body_2};

    @media screen and (min-width: 800px) and (max-width: 999px) {
        height: 95px;
    }
    @media screen and (min-width: 500px) and (max-width: 669px) {
        height: 70px;
        font-size: 12px;
    }
    @media screen and (min-width: 400px) and (max-width: 499px) {
        height: 70px;
        font-size: 12px;
    }
`;

export const ArrowButton = styled.button<{ direction: string }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${({theme}) => theme['--card-item-background-color']};
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;

    ${({direction}) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
    &:hover {
        opacity: 0.7;
    }
`;
export const TempStyle = styled.div`
    color: ${({theme}) => theme['--temp-indicator-color']};
`
export const DateTimeStyle = styled.div`
    color: ${({theme}) => theme['--card-title-color']};
`