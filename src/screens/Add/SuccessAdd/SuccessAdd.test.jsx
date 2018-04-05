import React from 'react';
import ReactDOM from 'react-dom';
import { SuccessAdd } from './SuccessAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SuccessAdd t={key => key} />, div);
});
