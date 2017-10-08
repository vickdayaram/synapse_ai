import React, { Component } from 'react'
import GifComponent from '../Components/GifComponent'

const url = 'http://api.giphy.com/v1/gifs/search?q=monkeys&api_key=dc6zaTOxFJmzC'
const test = "https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"
class GifContainer extends Component {

  render() {
    return (
      <div >
        < GifComponent url={url} />
      </div>
    );
  }
}

export default GifContainer
