import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { CategoryList } from './CategoryList';

const element = (
  <MemoryRouter>
    <CategoryList />
  </MemoryRouter>
);

describe('categoryList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(element, div);
  });
});

describe('component', () => {
  let categoryList;

  beforeEach(() => {
    categoryList = mount(element);
  });

  afterEach(() => {
    categoryList.unmount();
  });

  it('renders 16 Category components', () => {
    expect(categoryList.find('Category').length).toBe(16);
  });

  it('renders 1 button', () => {
    const button = categoryList.find('button');
    expect(button.length).toBe(1);
  });
});

describe('method', () => {
  let categoryList;
  let button;

  beforeEach(() => {
    jest.spyOn(CategoryList.prototype, 'toggleHidden');
    categoryList = mount(element).find(CategoryList);
    button = categoryList.find('button');
  });

  afterEach(() => {
    CategoryList.prototype.toggleHidden.mockRestore();
  });

  describe('toggleHidden', () => {
    it('gets called after button click', () => {
      button.simulate('click');
      expect(CategoryList.prototype.toggleHidden).toHaveBeenCalled();
    });

    it('toggles state of component', () => {
      expect(categoryList.instance().state.hidden).toEqual(true);
      button.simulate('click');
      expect(categoryList.instance().state.hidden).toEqual(false);
    });

    it('updates button text', () => {
      expect(button.find('span').text()).toEqual('components.categoryList.seeMore');
      button.simulate('click');
      expect(button.find('span').text()).toEqual('components.categoryList.seeLess');
    });
  });
});
