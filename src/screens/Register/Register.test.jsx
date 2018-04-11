import React from 'react';
import ReactDOM from 'react-dom';
import { SreensRegister } from './Register';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SreensRegister t={key => key} />, div);
});
