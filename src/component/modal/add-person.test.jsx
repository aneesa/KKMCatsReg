import React from 'react';
import ReactDOM from 'react-dom';
import AddPerson from './add-person';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddPerson />, div);
});
