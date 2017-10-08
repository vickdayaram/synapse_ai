import React, { Component } from 'react'


class GifComponent extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div >
        <image src={this.props.url} />
      </div>
    );
  }

}

export default GifComponent
