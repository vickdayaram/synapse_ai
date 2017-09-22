import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class UrlForm extends Component {
  constructor(){
    super()
    this.state = {
      url: ""
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

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
    const { value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field onChange={this.handleChange} control={TextArea} label='Image URL Form' placeholder='Copy and Paste an Image URL' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default UrlForm
