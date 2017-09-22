import React, { Component } from 'react';
import Nav from '../Components/Nav'
import SketchContainer from './SketchContainer'
import ImageContainer from './ImageContainer'
import { aiPredict } from '../ApiAdapter'
import AiPredictionsContainer from './AiPredictionsContainer'

class AppContainer extends Component {

  constructor(){
    super()
    this.state = {
      url: ""
    }
  }


  handleSubmit = (url) => {
    this.setState({
      url: url
    })
    aiPredict(url)
  }

  render() {
    return (
      <div >
        < Nav />
        < ImageContainer handleSubmit={this.handleSubmit} url={this.state.url}/>
        < AiPredictionsContainer />
      </div>
    );
  }
}

export default AppContainer
