import React, { Component } from 'react'
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'

class UrlForm extends Component {

  constructor(){
    super()
    this.state = {
      url: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let url = this.state.url
    this.props.handleSubmit(url)
  }

  handleChange = (event) => {
    this.setState({
      url: event.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field onChange={this.handleChange} control={Input} label='Image URL Form' placeholder='Copy and Paste an Image URL' width={16}/>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default UrlForm
