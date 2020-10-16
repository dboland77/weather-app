export function getForecast( id, apiKey) {
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

export function getCurrentWeather( id, apiKey) {
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