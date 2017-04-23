import React, { Component } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

import ActionHeader from './shared/action-header'
import AddLitter from './modal/add-litter'

class Litters extends Component {

  render() {
    return (
      <div>
        <ActionHeader headerTitle='LITTERS' addModal={AddLitter} />
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Actions</Table.HeaderCell>
              <Table.HeaderCell>Breeder</Table.HeaderCell>
              <Table.HeaderCell>New Registration</Table.HeaderCell>
              <Table.HeaderCell>Cattery</Table.HeaderCell>
              <Table.HeaderCell>Litter Number</Table.HeaderCell>
              <Table.HeaderCell>Date of Birth</Table.HeaderCell>
              <Table.HeaderCell>Register Date</Table.HeaderCell>
              <Table.HeaderCell>Sire</Table.HeaderCell>
              <Table.HeaderCell>Dam</Table.HeaderCell>
              <Table.HeaderCell>Number of Kittens</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h2' textAlign='center'>A</Header>
              </Table.Cell>
              <Table.Cell singleLine>Power Output</Table.Cell>
              <Table.Cell>
                <Rating icon='star' defaultRating={3} maxRating={3} />
              </Table.Cell>
              <Table.Cell textAlign='right'>
                80% <br />
                <a href='#'>18 studies</a>
              </Table.Cell>
              <Table.Cell>
                Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
                variability in this increase, however, with some nonresponders.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h2' textAlign='center'>A</Header>
              </Table.Cell>
              <Table.Cell singleLine>Weight</Table.Cell>
              <Table.Cell>
                <Rating icon='star' defaultRating={3} maxRating={3} />
              </Table.Cell>
              <Table.Cell textAlign='right'>
                100% <br />
                <a href='#'>65 studies</a>
              </Table.Cell>
              <Table.Cell>
                Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
                potency
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Litters
