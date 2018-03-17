import React from 'react';
import ReactDOM from 'react-dom';
import { SreensAddForm } from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SreensAddForm t={key => key} />, div);
});
