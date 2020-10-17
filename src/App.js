import React, {useState,useEffect } from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Layout from "./components/Layout/Layout";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Header from "./components/Header/Header";
import * as Utils from "./Utilities/Utilities";
import WeatherForecast from './components/WeatherCard/WeatherForecast';

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_URL=process.env.REACT_APP_IMAGE_URL;
const LONDON = 2643743;
const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${LONDON}&appid=${API_KEY}`
const FIVE_DAY_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&id=${LONDON}&appid=${API_KEY}`

// City id rather than name is recommended so I am using this


function App() {  
  const [weatherImage, setWeatherImage] = useState("");
  const [temperature, setTemperature] = useState("");
  const [day,setDay] = useState("");
  const [description, setDescription] = useState("");
  const [error,setError] = useState(null);
  const [forecast,setForecast] = useState([]);

  // use setinterval to refresh the data every minute.

  useEffect( () => {
    getWeather()
    getForecast()
    setInterval(()=> {
      getWeather()
      getForecast()
    },60000)
  },[]) 


  function getWeather() {
    // Get the current weather
    fetch(CURRENT_URL)  
    .then(response=>response.json()) 
    .then(function(data) {
      if (data.cod===200){  
        setWeatherImage(`${IMAGE_URL}${data.weather[0].icon}.png`)
        setTemperature(Math.round(data.main.temp))
        setDescription(data.weather[0].description)
        setDay(Utils.getDayfromDate(data.dt))
        return true
      }
      else {
        return false
      }
    })
    .catch(err => {
      setError(err.message);
    });
}

function getForecast(){
    //Get the five day forecast
   return fetch(FIVE_DAY_URL)  
    .then(response=>response.json()) 
    .then(function(data) {
      if (data.cod==="200"){  
          setForecast(Utils.fiveDayFilter(data));
      }
      else {
        return false
      }
    })
    .catch(err => {
      setError(err.message);
    });
}
  return(
    <React.Fragment>
   <Header city="LONDON" temp={temperature}>
   <ProgressBar/>
   </Header >
   <Layout>
   <WeatherCard 
  day={day}
  temp={temperature} 
  image={weatherImage}
    description={description}
  />
  <WeatherForecast forecast={forecast}/>
  </Layout>
  </React.Fragment>
)
}

export default App;
