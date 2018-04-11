import React from 'react';
import ReactDOM from 'react-dom';
import { SreensLogin } from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SreensLogin t={key => key} />, div);
});
