import React from 'react';
import {format} from "date-fns";
import {
    DaysForecastText, ForecastIcon, IconDescription,
    WeekForecastCardContent,
    WeekForecastCardDate,
    WeekForecastCardDatesContainer,
    WeekForecastCardDay, WeekForecastCardIconContainer, WeekForecastCardTemp, WeekForecastCardTempContainer,
    WeekForecastContentContainer,
    WeekForecastTextContainer,
    WeekForecastWrapper
} from './weekForecastStyles';
import {Skeleton} from "../../skeleton/Skeleton";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const WeekForecast = () => {

    const dailyForecasts = useTypedSelector((state) => state.weather.forecasts.daily || []);

    const dailyForecastsDateTime = dailyForecasts.slice(1, 8).map(forecast => {
        const timestamp = forecast.dt * 1000;
        const dateObject = new Date(timestamp);
        const formattedDate = format(dateObject, 'd MMM, EEEE');

        return {
            formattedDate,
            tempMin: Math.floor(forecast.temp.min),
            tempMax: Math.floor(forecast.temp.max),
            description: forecast.weather[0]?.description,
            icon: forecast.weather[0]?.icon
        };
    });

    if (dailyForecasts.length === 0) {
        return <Skeleton height={"100%"} width={"100%"}/>;
    }

    return (
        <WeekForecastWrapper>
            <WeekForecastTextContainer>
                <DaysForecastText>7 days forecast</DaysForecastText>
            </WeekForecastTextContainer>
            <WeekForecastContentContainer>
                {dailyForecastsDateTime.map((forecast, index) => (
                    <WeekForecastCardContent key={index}>
                        <WeekForecastCardDatesContainer>
                            <WeekForecastCardDate>
                                {forecast.formattedDate.split(', ')[0]}
                            </WeekForecastCardDate>
                            <WeekForecastCardDay>
                                {forecast.formattedDate.split(', ')[1]}
                            </WeekForecastCardDay>
                        </WeekForecastCardDatesContainer>
                        <WeekForecastCardIconContainer>
                            <ForecastIcon
                                src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
                                alt={forecast.description}/>
                            <IconDescription>
                                {forecast.description}
                            </IconDescription>
                        </WeekForecastCardIconContainer>
                        <WeekForecastCardTempContainer>
                            <WeekForecastCardTemp>{forecast.tempMax}°/</WeekForecastCardTemp>
                            <WeekForecastCardTemp>{forecast.tempMin}°</WeekForecastCardTemp>
                        </WeekForecastCardTempContainer>
                    </WeekForecastCardContent>
                ))}
            </WeekForecastContentContainer>
        </WeekForecastWrapper>
    );
};