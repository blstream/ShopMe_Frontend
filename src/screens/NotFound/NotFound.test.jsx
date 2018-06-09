import React from 'react';
import ReactDOM from 'react-dom';
import { NotFoundScreen } from './NotFound';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = <NotFoundScreen />;
  ReactDOM.render(component, div);
});
