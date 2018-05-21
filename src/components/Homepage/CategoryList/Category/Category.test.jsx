import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Category } from './Category';

describe('category', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const element = (
      <MemoryRouter>
        <Category />
      </MemoryRouter>
    );
    ReactDOM.render(element, div);
  });

  it('renders 1 img element', () => {
    const category = shallow(<Category />);
    expect(category.find('img').length).toBe(1);
  });

  it('renders 1 p element', () => {
    const category = shallow(<Category />);
    expect(category.find('p').length).toBe(1);
  });
});
