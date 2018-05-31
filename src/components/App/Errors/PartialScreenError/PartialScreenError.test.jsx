import React from 'react';
import ReactDOM from 'react-dom';
import { PartialScreenError } from './PartialScreenError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartialScreenError />, div);
});
