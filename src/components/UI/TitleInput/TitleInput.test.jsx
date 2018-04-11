import React from 'react';
import ReactDOM from 'react-dom';
import { TitleInput } from './TitleInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TitleInput />, div);
});
