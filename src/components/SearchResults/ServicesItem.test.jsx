import React from 'react';
import ReactDOM from 'react-dom';
import ServicesItem from './ServicesItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const service = {
    title: 'Koszenie trawników',
    price: '50',
    data: '01-04-2016',
    id: 1,
  };
  ReactDOM.render(<ServicesItem value={service} />, div);
});
