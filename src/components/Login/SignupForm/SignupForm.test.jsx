import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignupForm t={key => key} />, div);
});
