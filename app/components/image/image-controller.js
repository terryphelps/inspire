import ImageService from "./image-service.js";

const _is = new ImageService()

//NOTE I have to read Porters slack message to find out how to format the imageElem line.

function drawImage() {
  let image = _is.Image
  document.body.style.backgroundImage = `url(${image.url})`
}

export default class ImageController {
  constructor() {
    console.log("got to Image controller")
    _is.addSubscriber("image", drawImage)
    _is.getImage()
  }
}