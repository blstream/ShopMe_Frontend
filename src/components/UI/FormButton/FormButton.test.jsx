import React from 'react';
import ReactDOM from 'react-dom';
import FormButton from './FormButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormButton />, div);
});
