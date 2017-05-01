import React, { Component } from 'react'

import ActionHeader from './shared/action-header'
import DataTable from './shared/data-table'
import AddPerson from './modal/add-person'
import PeopleTableBody from './people-table-body'

class People extends Component {
  render() {
    const tableHeaders = ['Action', 'Name']
    const tableRows = [{ 'id' : 1, 'name' : 'John Doe'}, { 'id' : 2, 'name' : 'Jason Bourne'}]
    return (
      <div>
        <ActionHeader headerTitle='PEOPLE' addModal={AddPerson} />
        <DataTable tBody={PeopleTableBody} tHeaders={tableHeaders} tRows={tableRows} />
      </div>
    )
  }
}

export default People
