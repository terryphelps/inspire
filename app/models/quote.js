export default class Quote {
  constructor(data) {
    this.body = data.quote ? data.quote.body : data.body
    this.author = data.quote ? data.quote.author : data.author
  }
  get Template() {
    //NOTE inside of this template is where you would put the button to be clicked to toggle F/C
    return `
      <h6 class="quote-items"> Author: ${this.author}</h6>
      <p class="quote-items">\"${this.body}\"</p>
    `
  }
}