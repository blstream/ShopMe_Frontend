import React from 'react';
import ReactDOM from 'react-dom';
import FirstNameInput from './FirstNameInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstNameInput />, div);
});
