import React from 'react';
import ReactDOM from 'react-dom';
import AddLitter from './add-cat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddLitter />, div);
});
