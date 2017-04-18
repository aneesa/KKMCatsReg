import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
// import Home from './home'
// import Cats from './cats'
import Litters from './litters'

class TopNav extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item name='Cats' active={activeItem === 'Cats'} onClick={this.handleItemClick} />
          <Menu.Item name='Litters' active={activeItem === 'Litters'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <Litters />
        </Segment>
      </div>
    );
  }
}

export default TopNav;
