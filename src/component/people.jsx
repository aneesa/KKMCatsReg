import React, { Component } from 'react'
import { Table, Header } from 'semantic-ui-react'

import ActionHeader from './shared/action-header'
import AddPerson from './modal/add-person'

class People extends Component {
  render() {
    return (
      <div>
        <ActionHeader headerTitle='PEOPLE' addModal={AddPerson} />
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Actions</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h2' textAlign='center'>A</Header>
              </Table.Cell>
              <Table.Cell singleLine>John Doe</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h2' textAlign='center'>A</Header>
              </Table.Cell>
              <Table.Cell singleLine>Jane Smith</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default People
