import React from 'react';
import ReactDOM from 'react-dom';
import { SreensExamplesHello } from './Hello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SreensExamplesHello t={key => key} />, div);
});
