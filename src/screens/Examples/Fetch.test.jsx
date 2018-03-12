import React from 'react';
import ReactDOM from 'react-dom';
import ScreensExamplesFetch from './Fetch';

it('renders without crashing', () => {
  fetch.mockResponse(JSON.stringify([{ date: 'mydate' }]));

  const div = document.createElement('div');
  ReactDOM.render(<ScreensExamplesFetch />, div);
});
