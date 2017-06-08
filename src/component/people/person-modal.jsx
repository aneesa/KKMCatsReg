import React, {Component} from 'react'
import { Button, Modal, Form, Message } from 'semantic-ui-react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPerson, editPerson } from '../../action/people'

import Person from '../../model/person'

const ADD_ACTION = 'Add'
const EDIT_ACTION = 'Edit'

class PersonModal extends Component {
  constructor(props) {
    super(props);
    if(!props.person) {
      this.state = {
        modalOpen: false,
        personName: ''
      };
    }
    else {
      this.state = {
        modalOpen: false,
        personName: props.person.name
      };
    }
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  onName(evt) {
    this.setState({
      personName: evt.target.value
    })

    if (this.props.action === EDIT_ACTION) {
      this.props.person.name = evt.target.value
    }
  }

  onSubmit (evt) {
    evt.preventDefault()
    if (this.props.action === ADD_ACTION) {
      this.props.addPerson(new Person(this.state.personName))
    }
    else if (this.props.action === EDIT_ACTION) {
      this.props.editPerson(this.props.person)
    }

    this.handleClose()
  }

  render() {

    let modalTrigger = null;
    if (this.props.action === ADD_ACTION) {
      modalTrigger = <Button icon='plus' circular primary onClick={this.handleOpen} />
    }
    else if (this.props.action === EDIT_ACTION) {
      modalTrigger = <Button icon='write' circular primary onClick={this.handleOpen} />
    }

    return (
      <Modal trigger={modalTrigger} closeIcon='close' open={this.state.modalOpen} onClose={this.handleClose}>
        <Modal.Header>{this.props.action} a Person</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.onSubmit.bind(this)} error>
              <Form.Input value={this.state.personName} label='Name' placeholder='Name' onChange={this.onName.bind(this)} required />
              <Message
                error
                content='Please fill up the required fields *'
              />
              <Button primary fluid type='submit'>
                {this.props.action} Person
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addPerson, editPerson
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(PersonModal))
