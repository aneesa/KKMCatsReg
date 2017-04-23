import React, {Component} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

class AddPerson extends Component {
  render() {
    return (
      <Modal trigger={<Button icon='plus' circular primary />} closeIcon='close'>
        <Modal.Header>Add a New Person</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Input label='Name' placeholder='Name' />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Add Person
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddPerson
