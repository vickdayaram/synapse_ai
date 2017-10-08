import React, { Component } from 'react'
import ImageComponent from '../Components/ImageComponent'

class GifContainer extends Component {

  render() {
    return (
      <div >
        < ImageComponent url={this.props.url} />
      </div>
    );
  }
}

export default GifContainer
