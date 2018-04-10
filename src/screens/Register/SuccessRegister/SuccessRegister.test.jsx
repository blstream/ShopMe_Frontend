import React from 'react';
import ReactDOM from 'react-dom';
import { SreensSuccessRegister } from './SuccessRegister';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SreensSuccessRegister t={key => key} />, div);
});
