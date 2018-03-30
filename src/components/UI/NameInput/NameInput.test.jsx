import React from 'react';
import ReactDOM from 'react-dom';
import NameInput from './NameInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NameInput />, div);
});
