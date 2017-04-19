import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import logo from '../../img/kkm-logo.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>HOME</Header>
        <img src={logo} alt="React!"/>
      </div>
    );
  }
}

export default Home;
