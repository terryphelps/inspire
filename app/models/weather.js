export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    // NOTE  (0K − 273.15) × 9/5 + 32 = -459.7°F
    this.city = data.name
    this.temp = ((data.main.temp - 273.15) * 9 / 5 + 32)
  }

  Template() {
    return `
    <h1> ${this.city}</h1>
		<h2> ${this.temp.toFixed(0)}F</h2>
    `
  }
}