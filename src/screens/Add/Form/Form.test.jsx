import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { AddFormScreen } from './Form';

describe('AddFormScreen', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const http = {
      get: fetch.mockResponse(JSON.stringify({ data: '123' })),
    };
    const element = (
      <MemoryRouter>
        <AddFormScreen http={http} />
      </MemoryRouter>
    );

    ReactDOM.render(element, div);
  });
});
