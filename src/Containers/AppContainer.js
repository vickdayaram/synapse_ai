import React, { Component } from 'react';
import Nav from '../Components/Nav'
import SketchContainer from './SketchContainer'
import ImageContainer from './ImageContainer'
import { aiPredict } from '../ApiAdapter'
import AiPredictionsContainer from './AiPredictionsContainer'
import { Grid } from 'semantic-ui-react'
import UserInputContainer from './UserInputContainer'
import WinModal from '../Modals/WinModal'
import GifContainer from './GifContainer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AppContainer extends Component {

  constructor(){
    super()
    this.state = {
      url: "",
      aiPredictions: [],
      human: [],
      count: 0,
      synapseAi: false,
      displayUserInput: false
    }
  }

  componentWillMount = () => {
    this.test()
  }

  headers = () => {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

  test(){
    let options = {'Content-type': 'application/json'}
    fetch('https://codetest.kube.getswift.co/drones',{'mode': 'no-cors'})
    .then(res => console.log(res))
  }

  handleSubmit = (url) => {
    this.setState({
      url: url,
      displayUserInput: true
    })
    aiPredict(url, this.findData)
  }

  findData = (json) => {
    let aiPredictions = json.outputs[0].data.concepts.slice(0, 10)
    this.setState({
      aiPredictions: aiPredictions
    })
  }

  handleGuess = (guess) => {
    let aiPredictions = this.state.aiPredictions
    let guessedRight = false
    aiPredictions.forEach((aP) => {
      if(aP.name === guess){
      aP["app_id"] = "found"
      guessedRight = true
      }
    })
    if(guessedRight){
      this.setState({
        aiPredictions: aiPredictions,
        count: ++this.state.count
      })
    }
    guessedRight = false
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

  iAmNotaMachine = () => {
    let aiPredictions = this.state.aiPredictions
    aiPredictions.forEach((aP) => { aP["app_id"] = "found"})
    this.setState({
      aiPredictions: aiPredictions
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
            <Grid.Column width={6}>
              < ImageContainer handleSubmit={this.handleSubmit} url={this.state.url}/>
              {this.state.displayUserInput ?
                < UserInputContainer handleSubmit={this.handleGuess} iAmNotaMachine={this.iAmNotaMachine}/>
                :
                null
              }
            </Grid.Column>
            <Grid.Column width={10}>
              < AiPredictionsContainer aiPredictions={this.state.aiPredictions}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              < GifContainer />
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default AppContainer
