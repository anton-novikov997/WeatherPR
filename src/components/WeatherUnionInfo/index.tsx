import React from 'react';
import {ThisDay} from "../ThisDay";
import {WeatherDetails} from "../weatherDetails";
import {WeekForecast} from "../weekForecast";
import {Days} from "../Days";
import {
    ForeCastContainer,
    WeatherTownInfoContainer,
    WeatherUnionContainer, WeatherUnionInfoContainer,
    WeekForecastContainer
} from "./WeatherUnionInfoStyles";

export const WeatherUnionInfo = () => {
    return (
        <WeatherUnionContainer>
            <WeatherUnionInfoContainer>
                <WeatherTownInfoContainer>
                    <ThisDay/>
                    <ForeCastContainer>
                        <Days/>
                        <WeatherDetails/>
                    </ForeCastContainer>
                </WeatherTownInfoContainer>
                <WeekForecastContainer>
                    <WeekForecast/>
                </WeekForecastContainer>
            </WeatherUnionInfoContainer>
        </WeatherUnionContainer>
    )
};
