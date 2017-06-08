import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { List } from 'immutable'

import PersonModal from './person-modal'

class PeopleTableBody extends Component {
  render() {
    return (
      <Table.Body>
        {
          this.props.people.toJS().map(row => {
            return <Table.Row>
                      <Table.Cell singleLine>
                        <PersonModal action='Edit' person={row} />
                      </Table.Cell>
                      <Table.Cell singleLine>{row.name}</Table.Cell>
                   </Table.Row>
          })
        }
      </Table.Body>
    )
  }
}

PeopleTableBody.propTypes = {
  people: PropTypes.instanceOf(List)
}

const mapStateToProps = state => ({
  people: state.people.get("people")
})

export default withRouter(connect(mapStateToProps)(PeopleTableBody))
