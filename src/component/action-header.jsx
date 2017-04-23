import React, { Component } from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'

class ActionHeader extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column>
          <Button icon='plus' circular color='blue' />
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <Header as='h1'> {this.props.headerTitle} </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ActionHeader
