import React, {useEffect } from 'react';


const API_KEY = process.env.REACT_APP_API_KEY;
const LONDON = process.env.REACT_APP_LONDON;


// City id rather than name is recommended so I am using this endpoint

function getForecast( id, apiKey) {
  const fivedayurl = "https://api.openweathermap.org/data/2.5/forecast?"

  fetch(fivedayurl +'id=' + id+ '&appid=' + apiKey)  
  .then(response => response.json()) 
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


function App() {  
    useEffect(() => {      
      getCurrentWeather(LONDON, API_KEY); 
      getForecast(LONDON, API_KEY); 
}, []);  

function getCurrentWeather( id, apiKey) {
  const currenturl = "https://api.openweathermap.org/data/2.5/weather?"

  fetch(currenturl +'id=' + id+ '&appid=' + apiKey)  
  .then(response=>response.json()) 
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

return(
  <h1> Checking API call (console log)</h1>
)
}

export default App;
