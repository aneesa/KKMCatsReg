import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class DataTable extends Component {
  render() {
    const TableBody = this.props.tBody

    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            {
              this.props.tHeaders.map(header => {
                return <Table.HeaderCell singleLine textAlign='center'>{header}</Table.HeaderCell>
              })
            }
          </Table.Row>
        </Table.Header>

        <TableBody />
      </Table>
    )
  }
}

export default DataTable
