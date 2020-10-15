# Weather Application

## Prototype
This contains the prototype for a weather application.

The prototype folder contains two files:

- proto.html
- proto.css

These contain the HTML and CSS for a mock-up of the design below:

<img src ="./Front_End_Design.png">


## API Calls

We need two API calls
1. For the current weather to the /current endpoint
2. For the forecast to the /forecast endpoint

I have use two separate functions to test the API calls
each take the city id and api key as parameters.

To hide the API key from being seen I am using REACT_APP environment variables for both (in the .env root file)

To ensure that these are populated when I call the API endpoints I hook them with useEffect which runs after these variables have populated (and rendering is complete)

Functional test
Both API calls are returning valid data.
