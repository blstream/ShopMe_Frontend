import React from 'react';
import ReactDOM from 'react-dom';
import { AddForm } from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddForm
      categories={[1, 2, 3]}
      voivodeships={[1, 2, 3]}
    />,
    div
  );
});
