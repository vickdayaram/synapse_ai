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
      url: "",
      predictions: []
    }
  }

  handleSubmit = (url) => {
    this.setState({
      url: url
    })
    aiPredict(url, this.findData)
  }

  findData = (json) => {
    let predictions = json.outputs[0].data.concepts
    this.setState({
      predictions: predictions
    })
    debugger
  }

  render() {
    return (
      <div >
        < Nav />
        < ImageContainer handleSubmit={this.handleSubmit} url={this.state.url}/>
        < AiPredictionsContainer predictions={this.state.predictions}/>
      </div>
    );
  }
}

export default AppContainer
