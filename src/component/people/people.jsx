import React, { Component } from 'react'

import ActionHeader from '../shared/action-header'
import DataTable from '../shared/data-table'
import PersonModal from './person-modal'
import PeopleTableBody from './people-table-body'

class People extends Component {

  render() {
    const tableHeaders = ['Action', 'Name']
    return (
      <div>
        <ActionHeader headerTitle='PEOPLE' addModal={PersonModal} />
        <DataTable tBody={PeopleTableBody} tHeaders={tableHeaders} />
      </div>
    )
  }
}

export default People
