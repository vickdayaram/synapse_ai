import React, { Component } from 'react'
import ImageComponent from '../Components/ImageComponent'
import UrlForm from '../Components/UrlForm'

class ImageContainer extends Component {

  constructor(){
    super()
    this.state = {
      url: ""
    }
  }

  componentWillMount(){

  }

  handleSubmit = (url) => {
    this.setState({
      url: url
    })
  }

  render() {
    return (
      <div >
        < UrlForm handleSubmit={this.handleSubmit}/>
        < ImageComponent url={this.state.url}/>
      </div>
    );
  }
}

export default ImageContainer
