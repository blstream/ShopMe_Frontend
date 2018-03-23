import React from 'react';
import ReactDOM from 'react-dom';
import FoundSearchResults from './FoundSearchResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoundSearchResults services={[]} />, div);
});
