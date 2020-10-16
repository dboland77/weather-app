import React, {useEffect } from 'react';
import {getForecast,getCurrentWeather} from "./components/APICall/APICall";
import WeatherCard from './components/WeatherCard/WeatherCard';
import Layout from "./components/Layout/Layout";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Header from "./components/Header/Header";

const API_KEY = process.env.REACT_APP_API_KEY;
const LONDON = 2643743;

// City id rather than name is recommended so I am using this

function App() {  
    useEffect(() => {      
      getCurrentWeather(LONDON, API_KEY); 
      getForecast(LONDON, API_KEY); 
}, []);  



return(
  <React.Fragment>
  <Header>
  <ProgressBar/>
  </Header>
  <Layout>
  <WeatherCard/>
  <WeatherCard/>
  </Layout>
  </React.Fragment>
)
}

export default App;
