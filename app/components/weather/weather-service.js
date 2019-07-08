import Weather from "../../models/weather.js";

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class WeatherService {
	// NOTE inside of a class definition and inside of a method definition
	//NOTE  in that class the 'this' keyword is used to reference another 
	//NOTE member within the same class.I.E., 'this' is a reference to the class

	get Weather() {
		return new Weather(_state.weather) //doens't have main property but instead just temp which is in farhenheit
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getWeather() {
		console.log('Calling the Weatherman')
		weatherApi.get()
			.then(res => {
				_setState('weather', new Weather(res.data)) //has the property main = { temp: kelvin }
			})
			.catch(e => console.error(e))

	}
	//NOTE logic to modify the weather temperature from F to C
	/**
	 * PSUEDO CODE FOR TOGGLE WEATHER
	 * 1. get a copy of the weather object
	 * 2. if change temp to C or F depending
	 * 3. change the value of the weather property on the state to be the object you just modified
	 */
}
