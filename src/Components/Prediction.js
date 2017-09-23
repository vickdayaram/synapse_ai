import React from 'react'
import { Card } from 'semantic-ui-react'

const Prediction = (props) => (
    <Card>
      <Card.Content>
        {props.prediction["app_id"] === "main" ?
        <Card.Header> {"    "} </Card.Header>
        :
        <Card.Header>{props.prediction.name.toUpperCase()}</Card.Header>
        }
      </Card.Content>
    </Card>
)

export default Prediction
