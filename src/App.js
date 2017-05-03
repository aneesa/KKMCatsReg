import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import ActionHeader from './component/shared/action-header'
import DataTable from './component/shared/data-table'

import Home from './component/home'
import Cats from './component/cats'
import Litters from './component/litters'

import AddPerson from './component/modal/add-person'
import PeopleTableBody from './component/people-table-body'

const HOME_ROUTE = '/'
const CATS_ROUTE = '/cats'
const LITTERS_ROUTE = '/litters'
const PEOPLE_ROUTE = '/people'

class App extends Component {
  render() {
    const mockHeaders = ['Action', 'Name']
    const mockData = [{ 'id' : 1, 'name' : 'John Doe'}, { 'id' : 2, 'name' : 'Jason Bourne'}]

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
              <Route exact path={PEOPLE_ROUTE}
                      render={ (props) =>
                                  <div>
                                    <ActionHeader headerTitle='PEOPLE' addModal={AddPerson} />
                                    <DataTable tHeaders={mockHeaders} tBody={PeopleTableBody} tRows={mockData} />
                                  </div>
                            }
              />
            </Switch>
          </Segment>
        </div>
      </Router>
    );
  }
}

export default App
