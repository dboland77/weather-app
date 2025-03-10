import React, {useState,useEffect, useRef} from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Layout from "./components/Layout/Layout";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Header from "./components/Header/Header";
import * as Utils from "./Utilities/Utilities";
import WeatherForecast from './components/WeatherCard/WeatherForecast';

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_URL="http://openweathermap.org/img/wn/";
// City id rather than name is recommended so I am using this
const LONDON = 2643743;
const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${LONDON}&appid=${API_KEY}`
const FIVE_DAY_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&id=${LONDON}&appid=${API_KEY}`

function App() {  
  const [weatherImage, setWeatherImage] = useState("");
  const [temperature, setTemperature] = useState("");
  const [day,setDay] = useState("");
  const [description, setDescription] = useState("");
  const [forecast,setForecast] = useState([]);
  const [reload, setReload] = useState(60);
  const[animate,setAnimate] = useState(0);
  
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
      console.error(err);
    });
}

function getForecast(){
    //Get the five day forecast
   return fetch(FIVE_DAY_URL)  
    .then(response=>response.json()) 
    .then(function(data) {
      if (data.cod==="200"){  
          setForecast(Utils.fiveDayFilter(data,IMAGE_URL));
      }
      else {
        return false
      }
    })
    .catch(err => {
      console.error(err);
    });
}


//Thank you Dan Abramov!
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
useInterval(() => {
  // Your custom logic here
  setReload(reload=== 0 ? 60 : reload - 1);
  if (reload===0){
    setAnimate(1)
  }
  if (reload === 58){
    setAnimate(0)
  }
}, 1000);


  return(
    <React.Fragment>
   <Header city="LONDON" temp={temperature}>
   <ProgressBar time={reload}/>
   </Header >
   <Layout>
   <WeatherCard 
  day={day}
  temp={temperature} 
  image={weatherImage}
    description={description}
    animate={animate}
  />
  <WeatherForecast forecast={forecast} animate={animate}/>
  </Layout>
  </React.Fragment>
)
}

export default App;
