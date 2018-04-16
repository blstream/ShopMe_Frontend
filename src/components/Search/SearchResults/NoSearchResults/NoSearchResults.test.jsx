import React from 'react';
import ReactDOM from 'react-dom';
import NoSearchResults from './NoSearchResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoSearchResults services={[]} />, div);
});
