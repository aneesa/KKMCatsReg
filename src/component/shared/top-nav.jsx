import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Home from '../home'
import Cats from '../cats'
import Litters from '../litters'
import People from '../people'

const HOME_ROUTE = '/'
const CATS_ROUTE = '/cats'
const LITTERS_ROUTE = '/litters'
const PEOPLE_ROUTE = '/people'

class TopNav extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu pointing>
            {/* todo: figure out how to set the active classname correctly */}
            <Menu.Item name='Home' as={NavLink} to={HOME_ROUTE} activeClassName='home' />
            <Menu.Item name='Cats' as={NavLink} to={CATS_ROUTE} activeClassName='cats' />
            <Menu.Item name='Litters' as={NavLink} to={LITTERS_ROUTE} activeClassName='litters' />
            <Menu.Item name='People' as={NavLink} to={PEOPLE_ROUTE} activeClassName='people' />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>

          <Segment>
            <Switch>
              <Route exact path={HOME_ROUTE} component={Home} />
              <Route exact path={CATS_ROUTE} component={Cats} />
              <Route exact path={LITTERS_ROUTE} component={Litters} />
              <Route exact path={PEOPLE_ROUTE} component={People} />
            </Switch>
          </Segment>
        </div>
      </Router>
    );
  }
}

export default TopNav;
