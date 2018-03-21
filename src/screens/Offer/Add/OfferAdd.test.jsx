import React from 'react';
import ReactDOM from 'react-dom';

import ScreenOfferAdd from './OfferAdd';

describe('ScreenOfferAdd component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScreenOfferAdd />, div);
  });
});
