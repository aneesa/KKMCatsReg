import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class PeopleTableBody extends Component {
  render() {
    return (
      <Table.Body>
        {
          this.props.tRows.map(row => {
            return <Table.Row>
                      <Table.Cell singleLine>{row.id}</Table.Cell>
                      <Table.Cell singleLine>{row.name}</Table.Cell>
                   </Table.Row>
          })
        }
      </Table.Body>
    )
  }
}

export default PeopleTableBody
