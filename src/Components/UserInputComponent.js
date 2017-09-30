import React, { Component } from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

class UserInputComponent extends Component {
  constructor(){
    super()
    this.state = {
      guess: ""
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (event) => {
    event.preventDefault()
    let guess = this.state.guess
    this.props.handleSubmit(guess)
    this.setState({
      guess: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      guess: event.target.value
    })
  }

  handleNotMachine = () => {
    this.props.iAmNotaMachine()
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field onChange={this.handleChange} value={this.state.guess} control={Input} label='Enter Your Guess!' placeholder='Guess' width={6}/>
          <Form.Field control={Button}>Click or Press enter to Submit</Form.Field>
        </Form>
        <Button positive size="massive" onClick={this.handleNotMachine}> I am not a Machine </Button>
      </div>
    )
  }
}

export default UserInputComponent
