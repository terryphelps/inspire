import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  console.log("Quote is coming", _qs.Quote)

  let quoteElem = document.querySelector("#quote")
  let quote = _qs.Quote
  quoteElem.innerHTML = quote.Template

}

export default class QuoteController {
  constructor() {
    console.log('Quote_Controller_constructor' + _qs)
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}
