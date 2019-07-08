export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    // NOTE  (0K − 273.15) × 9/5 + 32 = -459.7°F
    this.city = data.name || data.city
    this.temp = data.main ? ((data.main.temp - 273.15) * 9 / 5 + 32) : data.temp
  }

  get Template() {
    //NOTE inside of this template is where you would put the button to be clicked to toggle F/C
    return `
    <div id="weather-card" class="card">
				<h3 class="weather-items"> ${this.city}</h3>
		    <h4 class="weather-items"> ${this.temp.toFixed(0)}&#8457</h4>
		</div>
    `
  }
}