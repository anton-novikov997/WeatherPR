import React from 'react';
import {useDispatch} from 'react-redux';
import {setTemperatureUnit} from "../features/weatherSlice";
import {HiddenInput, LabelText, SwitchLabel, ToggleThumb} from "./tempUnitSwitcherStyles";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const TempUnitSwitcher = () => {
    const dispatch = useDispatch();
    const unit = useTypedSelector((state) => state.weather.unit);

    const isMetric = unit === 'metric';

    const handleChange = () => {
        dispatch(setTemperatureUnit(isMetric ? 'imperial' : 'metric'));
    };

    return (
        <SwitchLabel>
            <HiddenInput
                type="checkbox"
                checked={!isMetric}
                onChange={handleChange}
            />
            <ToggleThumb checked={!isMetric}/>
            <LabelText position="left" active={isMetric}>°C</LabelText>
            <LabelText position="right" active={!isMetric}>°F</LabelText>
        </SwitchLabel>
    );
};
