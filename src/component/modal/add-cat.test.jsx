import React from 'react';
import ReactDOM from 'react-dom';
import AddCat from './add-cat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCat />, div);
});
