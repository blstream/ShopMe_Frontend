import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ServicesItem from './ServicesItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const service = {
    title: 'Koszenie trawników',
    category: 'garden',
    bundle: {
      price: '50',
    },
    data: '01-04-2016',
    id: 1,
  };
  const element = (
    <MemoryRouter>
      <ServicesItem value={service} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});
