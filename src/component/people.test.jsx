import React from 'react';
import ReactDOM from 'react-dom';
import People from './people';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<People />, div);
});
