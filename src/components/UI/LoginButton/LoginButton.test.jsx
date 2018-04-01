import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from './LoginButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginButton />, div);
});
