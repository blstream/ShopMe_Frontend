import React from 'react';
import ReactDOM from 'react-dom';
import GenericSelect from './GenericSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericSelect />, div);
});
