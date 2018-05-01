import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import TermsAndConditionsCheckbox from './TermsAndConditionsCheckbox';

describe('TermsAndConditionsCheckbox component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      location: {
        state: {},
      },
    };
    const element = (
      <MemoryRouter>
        <TermsAndConditionsCheckbox location={props.location} />
      </MemoryRouter>
    );
    ReactDOM.render(element, div);
  });
});
