import React from 'react';
import ReactDOM from 'react-dom';
import ActionHeader from './action-header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionHeader />, div);
});
