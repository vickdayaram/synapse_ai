import React, { Component } from 'react';
import Nav from '../Components/Nav'
import SketchContainer from './SketchContainer'
import ImageContainer from './ImageContainer'

class AppContainer extends Component {
  render() {
    return (
      <div >
        < Nav />
        < ImageContainer />
      </div>
    );
  }
}

export default AppContainer
