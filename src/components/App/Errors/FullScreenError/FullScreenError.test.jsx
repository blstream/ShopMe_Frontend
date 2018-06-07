import React from 'react';
import ReactDOM from 'react-dom';
import { FullScreenError } from './FullScreenError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullScreenError />, div);
});
