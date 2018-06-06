import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleScreen } from './Article';

describe('ArticleScreen', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const http = {
      get: fetch.mockResponse(JSON.stringify({ data: '123' })),
    };
    const element = (
      <ArticleScreen
        match={{
          params: {
            name: 'test',
          },
        }}
        http={http}
      />
    );
    ReactDOM.render(element, div);
  });
});
