import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination />, div);
  });

  describe('simulate click on button', () => {
    it('simulate click on button', () => {
      const handleClick = jest.fn();
      const wrapper = shallow(<Pagination
        margin={2}
        page={4}
        totalPages={10}
        onPageChange={handleClick}
      />);
      wrapper.find('.pagination__button--first').simulate('click');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('check class name of buttons', () => {
    it('has active button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={3}
        totalPages={5}
      />);
      const nbButtons = wrapper.find('.pagination__button--active').length;
      expect(nbButtons).toEqual(1);
    });

    it('has last button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={5}
        totalPages={10}
      />);
      const nbButtons = wrapper.find('.pagination__button--last').length;
      expect(nbButtons).toEqual(1);
    });

    it('has prev button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={2}
        totalPages={3}
      />);
      const nbButtons = wrapper.find('.pagination__button--previous').length;
      expect(nbButtons).toEqual(1);
    });

    it('has next button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={2}
        totalPages={3}
      />);
      const nbButtons = wrapper.find('.pagination__button--next').length;
      expect(nbButtons).toEqual(1);
    });

    it('has inactive button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={8}
      />);
      const nbButton = wrapper.find('.pagination__button--inactive').length;
      expect(nbButton).toEqual(1);
    });

    it('has double inactive button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={15}
      />);
      const nbButton = wrapper.find('.pagination__button--inactive').length;
      expect(nbButton).toEqual(2);
    });
  });

  describe('has number of buttons', () => {
    it('has one button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={1}
        totalPages={1}
      />);
      const nbButtons = wrapper.find('.pagination__button--active').length;
      expect(nbButtons).toEqual(1);
    });

    // prev 1 2 3
    it('has four button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={3}
        totalPages={3}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(4);
    });

    // 1 2 3 next
    it('has four button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={1}
        totalPages={3}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(4);
    });

    // prev 1 2 3 next
    it('has five button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={1}
        totalPages={4}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(5);
    });

    // prev 1 2 3 4 5 6 7 next
    it('has nine button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={4}
        totalPages={7}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(9);
    });

    // prev 1 ... 4 5 6 7 8 next
    it('has nine button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={8}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(9);
    });

    // prev 1 2 3 4 5 ... 8 next
    it('has nine button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={3}
        totalPages={8}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(9);
    });

    // prev 1 ... 4 5 6 7 8 ... 15 next
    it('has eleven button', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={15}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(11);
    });
  });
});
