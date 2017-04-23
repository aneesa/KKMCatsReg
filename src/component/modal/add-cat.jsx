import React, {Component} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

class AddCat extends Component {
  state = { 'value' : 'M'}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Modal trigger={<Button icon='plus' circular primary />} closeIcon='close'>
        <Modal.Header>Add a New Cat</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Input label='Name' placeholder='Name' />
              <Form.Input label='Register Number' placeholder='Register Number' />
              <Form.Input label='Variety Code' placeholder='Variety Code' />
              <Form.Group inline>
                <label>Sex</label>
                <Form.Radio label='Male' value='M' checked={value === 'M'} onChange={this.handleChange} />
                <Form.Radio label='Female' value='F' checked={value === 'F'} onChange={this.handleChange} />
              </Form.Group>
              <Form.Checkbox label='Desex?' />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Add Cat
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddCat
