import styled from "styled-components";

export const CityTempThemeSwitchContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 139px;
    border: 1px solid darkblue;

    //@media screen and (min-width: 320px) and (max-width: 768px) {
    //    margin-top: 8px;
    //}
    @media screen and (min-width: 1000px) and (max-width: 1820px) {
        padding-right: 20px;
    }
    @media screen and (min-width: 700px) and (max-width: 999px) {
        padding-left: 30px;
        padding-right: 20px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        padding-right: 35px;

    }
    @media screen and (min-width: 599px) and (max-width: 699px) {
        padding-left: 30px;
        padding-right: 20px;
    }
    @media screen and (min-width: 570px) and (max-width: 599px) {
        padding-left: 3px;
        padding-right: 20px;
    }
    @media screen and (min-width: 300px) and (max-width: 570px) {
        padding-left: 3px;
        padding-right: 0;
    }
`
export const SearchCityWeatherContainer = styled.div`
    display: flex;
    width: 830px;
    position: relative;

    @media screen and (min-width: 320px) and (max-width: 768px ) {
        width: 100%;
        margin-left: 0;
    }
    //@media screen and (min-width: 768px) and (max-width: 992px ) {
    //    width: 80vw;
    //}
`
export const ToggleSwitchTempUnitContainer = styled.div`
    display: flex;
    height: 36px;
`
export const ToggleSwitchThemeContainer = styled.div`
    display: flex;
    margin-left: 10px;
    margin-right: 2px;
`