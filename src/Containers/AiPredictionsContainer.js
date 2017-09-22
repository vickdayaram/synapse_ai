import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Prediction from '../Components/Prediction'


class AiPredictionsContainer extends Component {

  render() {
    return (
      <div >
        <Card.Group>
        {this.props.predictions.length > 0 ?
          this.props.predictions.map((prediction) => < Prediction prediction={prediction} />)
          :
          null
        }
        </Card.Group>
      </div>
    );
  }
}

export default AiPredictionsContainer
