import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherForecast = (props) => {
  return(
    <ul>
      {props.forecast.map((day)=>{
        return(
      <WeatherCard 
          key={day.date}
          day={day.day}
          temp={day.temp} 
          image={day.icon}
            description={day.desc}
  />
        )
      })}
    </ul>
  )
}

export default WeatherForecast
