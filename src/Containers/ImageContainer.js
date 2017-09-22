import React, { Component } from 'react'
import ImageComponent from '../Components/ImageComponent'
import UrlForm from '../Components/UrlForm'
import { aiPredict } from '../ApiAdapter'

class ImageContainer extends Component {

  render() {
    return (
      <div >
        < UrlForm handleSubmit={this.props.handleSubmit}/>
        < ImageComponent url={this.props.url} />
      </div>
    );
  }
}

export default ImageContainer
