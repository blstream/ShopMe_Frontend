import React from 'react';
import ReactDOM from 'react-dom';
import { ExampleTitle } from './ExampleTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExampleTitle />, div);
});
