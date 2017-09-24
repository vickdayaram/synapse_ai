import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const WinModal = (props) => (
  <Modal open={true} >
    <Modal.Header> Winner </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Synapse AI, you Win!</Header>
      </Modal.Description>
    </Modal.Content>
    <Button onClick={props.handleReset} color='green' inverted>Go Back</Button>
  </Modal>
)

export default WinModal
