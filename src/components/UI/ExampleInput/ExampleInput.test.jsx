import React from 'react';
import ReactDOM from 'react-dom';
import { ExampleInput } from './ExampleInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExampleInput />, div);
});
