import React from 'react';
import ReactDOM from 'react-dom';
import GenericInput from './GenericInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericInput />, div);
});
