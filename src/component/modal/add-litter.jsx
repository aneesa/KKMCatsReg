import React, {Component} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

import AddPerson from './add-person'

class AddLitter extends Component {
  constructor() {
    super();
    this.state = {
      dateOfBirth: moment(),
      regDate: moment()
    };
  }

  handleDateOfBirthChange(date) {
    this.setState({
      dateOfBirth: date
    });
  }

  handleRegistrationDateChange(date) {
    this.setState({
      regDate: date
    });
  }

  render() {
    return (
      <Modal trigger={<Button icon='plus' circular primary />} closeIcon='close'>
        <Modal.Header>Add a New Litter</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input label='Breeder' placeholder='Breeder' />
            <Form.Checkbox label='New Registration?' />
            <Form.Input label='Cattery' placeholder='Cattery' />
            <Form.Input label='Litter Number' placeholder='Litter Number' />
            <Form.Input label='Date of Birth' placeholder='Date of Birth'
              control={DatePicker} selected={this.state.dateOfBirth} onChange={this.handleDateOfBirthChange.bind(this)} />
            <Form.Input label='Registration Date' placeholder='Registration Date'
              control={DatePicker} selected={this.state.regDate} onChange={this.handleRegistrationDateChange.bind(this)} />
            <Form.Input label='Number of Kittens' placeholder='Number of Kittens' />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Add Litter
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddLitter
