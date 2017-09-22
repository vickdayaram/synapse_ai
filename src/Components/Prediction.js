import React from 'react'
import { Card } from 'semantic-ui-react'

const Prediction = (props) => (
    <Card>
      <Card.Content>
        <Card.Header>Word</Card.Header>
        <Card.Meta>A-I</Card.Meta>
        <Card.Description>{props.prediction.name}</Card.Description>
      </Card.Content>
    </Card>
)

export default Prediction
