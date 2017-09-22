import React, { Component } from 'react';
import Nav from '../Components/Nav'
import SketchContainer from './SketchContainer'
import ImageContainer from './ImageContainer'
import { aiPredict } from '../ApiAdapter'
import AiPredictionsContainer from './AiPredictionsContainer'
import { Grid } from 'semantic-ui-react'

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
  }

  render() {
    return (
      <div >
        < Nav />
        <div className="main">
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              < ImageContainer handleSubmit={this.handleSubmit} url={this.state.url}/>
            </Grid.Column>
            <Grid.Column>
              < AiPredictionsContainer predictions={this.state.predictions}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default AppContainer
