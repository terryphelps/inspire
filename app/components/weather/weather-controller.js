import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)

	let weatherElem = document.querySelector("#weather")
	let weather = _weatherService.Weather // since controller doens't have any weather information we request the info from the service and save it as this new variable
	weatherElem.innerHTML = weather.Template
	/**<div id="weather"> innerHTML </div> */
}

//everything above (and outside of the WeatherController class definition) is private to just this file
//------------------------------------------------------------------------
//everything below (inside of the WeatherController class definition) is public to any file that imports this file

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

	// NOTE in here is where you would define the method that is triggered when the toggle temp button is clicked
	// NOTE this logic will basically just call to the service to manipulate the values of the weather data
}
