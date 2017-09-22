import React, { Component } from 'react';
import Nav from '../Components/Nav'
import SketchContainer from './SketchContainer'

class AppContainer extends Component {
  render() {
    return (
      <div >
        < Nav />
        < SketchContainer />
      </div>
    );
  }
}

export default AppContainer
