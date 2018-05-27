import React from 'react';
import ReactDOM from 'react-dom';
import { NonFatalError } from './NonFatalError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NonFatalError />, div);
});
