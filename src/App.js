import React, {useState,useEffect } from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Layout from "./components/Layout/Layout";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Header from "./components/Header/Header";

const API_KEY = process.env.REACT_APP_API_KEY;
const LONDON = 2643743;
const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
+'id=' + LONDON+ '&appid=' + API_KEY
let IMAGE_URL = "http://openweathermap.org/img/wn/"
// City id rather than name is recommended so I am using this

//  function getForecast( id, apiKey) {
//   const fivedayurl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&"

//   fetch(fivedayurl +'id=' + id+ '&appid=' + apiKey)  
//   .then(response => response.json()) 
//   .then(function(data) {
//     if (data.cod=== '200'){
//      alert("HELO")
//      return true
//     }
//     else{
//       return false
//     }
//   })
//   .catch(function() {
//     return false
//   });
// }

function App() {  
  const [weatherImage, setWeatherImage] = useState("");
  const [temperature, setTemperature] = useState("");
  // const [day,setDay] = useState("");
  const [description, setDescription] = useState("");

    useEffect(() => {    
      fetch(CURRENT_URL)  
  .then(response=>response.json()) 
  .then(function(data) {
    if (data.cod===200){  
      console.log(data.weather[0])
      setWeatherImage(IMAGE_URL + data.weather[0].icon+'.png')
      setTemperature(data.main.temp)
      setDescription(data.weather[0].description)

     return true
    }
    else {
      return false
    }
  })
  .catch(function() {
    return false
  });
}, []);  


return(
  <React.Fragment>
  <Header>
  <ProgressBar/>
  </Header>
  <Layout>
  <WeatherCard 
  day="MON"
  temp={temperature} 
  image={weatherImage}
    description={description}
  />
  <WeatherCard/>
  </Layout>
  </React.Fragment>
)
}

export default App;
