import React from 'react';
import ReactDOM from 'react-dom';
import { ExamplesIPAddress as IPAddress } from './IPAddress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IPAddress />, div);
});
