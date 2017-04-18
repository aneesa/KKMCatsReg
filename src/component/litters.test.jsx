import React from 'react';
import ReactDOM from 'react-dom';
import Litters from './litters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Litters />, div);
});
