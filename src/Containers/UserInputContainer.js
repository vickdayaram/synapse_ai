import React, { Component } from 'react'
import UserInputComponent from '../Components/UserInputComponent'


class UserInputContainer extends Component {

  render() {
    return (
      <div >
        < UserInputComponent handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default UserInputContainer
