import React from 'react';
import ReactDOM from 'react-dom';
import TermsAndConditions from './TermsAndConditions';

describe('TermsAndConditions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TermsAndConditions />, div);
  });
});
