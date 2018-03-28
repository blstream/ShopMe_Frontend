import React from 'react';
import ReactDOM from 'react-dom';
import AboutMeTextArea from './AboutMeTextarea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutMeTextArea />, div);
});
