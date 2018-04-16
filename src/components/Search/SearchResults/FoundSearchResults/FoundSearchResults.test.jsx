import React from 'react';
import ReactDOM from 'react-dom';
import FoundSearchResults from './FoundSearchResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const paginationData = {
    totalPages: 9,
  };
  const element = (
    <FoundSearchResults
      services={[]}
      paginationData={paginationData}
    />
  );

  ReactDOM.render(element, div);
});
