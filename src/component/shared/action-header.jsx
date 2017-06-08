import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

class ActionHeader extends Component {
  render() {
    const AddModal = this.props.addModal
    return (
      <Grid>
        <Grid.Column>
          <AddModal action='Add' modalOpen={true} />
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <Header as='h1'> {this.props.headerTitle} </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ActionHeader
