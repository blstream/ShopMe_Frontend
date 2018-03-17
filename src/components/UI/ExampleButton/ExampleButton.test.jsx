import React from 'react';
import ReactDOM from 'react-dom';
import { ExampleButton } from './ExampleButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExampleButton />, div);
});
