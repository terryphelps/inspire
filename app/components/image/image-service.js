import Image from "../../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/images",
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class ImageService {
	constructor() {
		console.log("got to Image Service")
	}

	get Image() {
		return new Image(_state.image)
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(res => {
				_setState('image', new Image(res.data))
			})
			.catch(e => console.error(e))
	}
	// getImage() {
	// 	imgApi.get('')
	// 		.then(res => {
	// 			console.log("getImage", res.data.url)
	// 			setState('url', res.data.url)
	// 		})
	// 		.catch((e) => console.error(e))
	// }
}