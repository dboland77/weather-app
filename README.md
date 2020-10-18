# Weather Application

This weather app displays the current weather in London and weather forecasts for the next 5 days. It will load this information when it opens and then refresh the information every minute.
The counter and progress bar will visualise time to next refresh.

## Note
I used Create React App (CRA) to bootstrap this project.

Other than the packages and dependencies used by CRA the only other external dependency installed and used by this project is the "dotenv" package to control the environment variable for the API Key. 

All components, hooks, CSS designs, CSS animations and utility functions are hand-written or available in the standard React environment. 

The app uses functional components and hooks rather than class-based components. 

## Running the application
Weather information for the application is obtained from the [Open Weather Api]("https://openweathermap.org/api").
In order to run the application you will need to register to use this service and obtain an API Key.

To run the application please:

1. Download or clone this repository
2. cd to the repository directory in terminal
3. type "npm install" and press enter. This will install the package dependencies for the app.
4. Create a .env file by typing "touch .env"
5. type 'echo "REACT_APP_API_KEY=YOUR_API_KEY" > .env'
   Please replace "YOUR_API_KEY" with your API KEY.
6. type "npm start" and press enter to start the application.

# Repository folder structure

## Prototype

This contains the prototype design for the weather application.

The prototype folder contains two files:

- proto.html
- proto.css

These contain the HTML and CSS for a mock-up of the design below:

<img src ="./Front_End_Design.png">

# Src/Components

I split the components into individual folders containing the functionality and modular css specific to that component.

## Clock

This component displays a digital 24 hour clock with the local time.
It uses setInterval to control the time along with the useState and useEffect hooks.

## Header
Renders the clock component and the top left and right tags with "LONDON" and the temperature (passed as props)

## Layout
Renders the inner container for the weather card components loaded as {children}.

## Progress Bar
Having tried a HTML5 <progress> </progress>.
 I found this a little too difficult to style. 

I went with a custom component comprised of a label, container and fill (spans and divs).
I control the fill colour and timer by passing props.time (remaining time to reload). 


## Weather Card
Also contains WeatherForecast component which generates a list of WeatherCards

Animated on refresh with keyframes. Displays the information from the API calls, received as props. 


# Utilities
I needed to write various functions to process and format information - these are all contained here. 
formatAPIDate()
addOneDay()
nextFourDays()
getDayfromDate()
fiveDayFilter()

# APP.js
I chose to write my Application using functional components and hooks. 

We need two API calls

1. For the current weather to the /current endpoint
2. For the forecast to the /forecast endpoint

I have used two separate functions to test the API calls
each take the city id and api key as parameters.

I obtain the weather with unit=metric for celsius results. 

To hide the API key from being seen I am using REACT_APP environment variables for both (in the .env root file).

To ensure that these are populated when I call the API endpoints I hook them with useEffect which runs after these variables have populated (and rendering is complete).

API calls are done asynchronously using the native javascript fetch function returning a promise. 

# Functional testing (manual)

1. Front end design is as required.

2. Both API calls are returning valid data.

3. Current weather component renders correctly

4. Forecast list of weather components renders correctly. 

5. Props are passed to these components and displayed correctly. 

6. API calls to current weather and forecast5 are every 60 seconds. 

7. 60 second timer is smooth.

8. Progress bar reduction is smooth.

9. Current temperature displayed in top right

10. Current time is displayed in the clock and updates.

11. Weather component animates on reload as expected.

12. The app gives no errors or warnings at design time.

13. The app gives no errors or warnings at build time. 

14. The app gives no errors or warnings and performs functions in line
with the design brief for a period of at least 20 minutes. 

# Future improvements

1. Full Testing using Jest and Enzyme.

2. I would move all the urls to the .env (I haven't to keep it simple to run from github).

3. If the app continues to grow or more functionality is required it could be refactored to use Context for state management (or Redux).

4. As the app looks like a mobile application we could make it fully mobile using a framework like [Ionic]("https://ionicframework.com/").

5. Deploy to a hosting service like Netlify or Heroku.

6. Detect the user's city based on location and pass this to the API call and the header component. 

7. Perform speed tests and optimisation. 

8. Refactor the code. 

9. Add better error handling (just console logs for now).

10. Complete the BONUS task!