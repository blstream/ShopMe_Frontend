import React from 'react';
import ReactDOM from 'react-dom';
import InvoiceInputGroup from './InvoiceInputGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvoiceInputGroup />, div);
});
