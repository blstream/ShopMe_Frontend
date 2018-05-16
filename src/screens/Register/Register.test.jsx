import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from './Register';

describe('RegisterScreen', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      location: {
        state: {
          name: 'name',
          surname: 'surname',
          email: 'email',
        },
      },
    };
    const http = {
      get: fetch.mockResponse(JSON.stringify({ data: '123' })),
    };
    const element = (
      <MemoryRouter>
        <RegisterScreen {...props} http={http} />
      </MemoryRouter>
    );
    ReactDOM.render(element, div);
  });
});
