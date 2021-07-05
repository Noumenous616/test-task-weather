import React, {useState} from "react";
import './weatherInfo.css'

let Weather = (props) => {




    return (
        <div className='weatherData'>

            {props &&
                <div className='weatherData_data'>
                    <li>City: {props.city_name} {props.country_code}</li>
                    <li>Temperature: {props.temp}℃ </li>
                <li> Wind speed: {props.wind_spd}m/s </li>
                <li> Direction of the wind: {props.wind_cdir_full} </li>

            </div>
            }
            <div className='error'>
                <p>{props.error}</p>
            </div>

        </div>
    )
}

export default Weather;

