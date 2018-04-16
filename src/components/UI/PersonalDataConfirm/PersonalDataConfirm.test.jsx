import React from 'react';
import ReactDOM from 'react-dom';
import { PersonalDataConfirm } from './PersonalDataConfirm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDataConfirm />, div);
});
