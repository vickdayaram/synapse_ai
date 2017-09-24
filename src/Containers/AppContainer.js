import React, { Component } from 'react';
import Nav from '../Components/Nav'
import SketchContainer from './SketchContainer'
import ImageContainer from './ImageContainer'
import { aiPredict } from '../ApiAdapter'
import AiPredictionsContainer from './AiPredictionsContainer'
import { Grid } from 'semantic-ui-react'
import UserInputContainer from './UserInputContainer'
import WinModal from '../Modals/WinModal'

class AppContainer extends Component {

  constructor(){
    super()
    this.state = {
      url: "",
      aiPredictions: [],
      human: [],
      count: 0,
      synapseAi: false
    }
  }

  handleSubmit = (url) => {
    this.setState({
      url: url
    })
    aiPredict(url, this.findData)
  }

  findData = (json) => {
    console.log(json)
    let aiPredictions = json.outputs[0].data.concepts
    this.setState({
      aiPredictions: aiPredictions
    })
  }

  handleGuess = (guess) => {
    let aiPredictions = this.state.aiPredictions
    let count = 0
    aiPredictions.forEach((aP) => {
      if(aP.name === guess){
      aP["app_id"] = "found"
      count = 1
      }
    })
    if(count = 1){
      this.setState({
        aiPredictions: aiPredictions,
        count: ++this.state.count
      })
    }
    this.checkForWin()
  }

  checkForWin = () => {
    if(this.state.count === 20){
      this.setState({
        synapseAi: true
      })
    }
  }

  handleReset = () => {
    this.setState({
      url: "",
      aiPredictions: [],
      human: [],
      count: 0,
      synapseAi: false
    })
  }

  render() {
    return (
      <div >
        {this.state.synapseAi ?
        < WinModal handleReset={this.handleReset}/> :
         null}
        < Nav />
        <div className="main">
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              < ImageContainer handleSubmit={this.handleSubmit} url={this.state.url}/>
              < UserInputContainer handleSubmit={this.handleGuess} />
            </Grid.Column>
            <Grid.Column>
              < AiPredictionsContainer aiPredictions={this.state.aiPredictions}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default AppContainer
