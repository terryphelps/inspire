import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class QuoteService {
	constructor() {
		console.log("Quote_Service_Constructor")
	}

	get Quote() {
		return new Quote(_state.quote)
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote() {
		console.log('checking with quote Master')
		_quoteApi.get()
			.then(res => {
				_setState('quote', new Quote(res.data))
			})
			.catch(e => console.error(e))

	}
}

