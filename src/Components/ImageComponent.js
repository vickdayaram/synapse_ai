import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class ImageComponent extends Component {

  constructor(){
    super()

  }

  render() {
    return (
      <div >
      <Image src={this.props.url} size='large' wrapped />

      </div>
    );
  }

}

export default ImageComponent
