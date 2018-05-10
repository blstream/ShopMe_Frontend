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
    it('should call passed onPageChange function after click on button', () => {
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
    it('should have an active button to show page', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={3}
        totalPages={5}
      />);
      const nbButtons = wrapper.find('.pagination__button--active').length;
      expect(nbButtons).toEqual(1);
    });

    it('should have the last page button if total page > 1 and page < total page - 2', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={5}
        totalPages={10}
      />);
      const nbButtons = wrapper.find('.pagination__button--last').length;
      expect(nbButtons).toEqual(1);
    });

    it('should have the prev button if total page > 1 and page > 1', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={2}
        totalPages={3}
      />);
      const nbButtons = wrapper.find('.pagination__button--previous').length;
      expect(nbButtons).toEqual(1);
    });

    it('should have the next button if total page > page', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={2}
        totalPages={3}
      />);
      const nbButtons = wrapper.find('.pagination__button--next').length;
      expect(nbButtons).toEqual(1);
    });

    it('should have an inactive button if total page >= 5 and if page > 4 or if page < total page - 3', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={8}
      />);
      const nbButton = wrapper.find('.pagination__button--inactive').length;
      expect(nbButton).toEqual(1);
    });

    it('should have two inactive buttons if total page >= 5 and if page > 4 and if page < total page - 3', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={15}
      />);
      const nbButton = wrapper.find('.pagination__button--inactive').length;
      expect(nbButton).toEqual(2);
    });
  });

  describe('have number of buttons', () => {
    it('should have one button if total page = 1', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={1}
        totalPages={1}
      />);
      const nbButtons = wrapper.find('.pagination__button--active').length;
      expect(nbButtons).toEqual(1);
    });

    // prev 1 2
    it('should have three buttons if total page = 2 and page = 2', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={2}
        totalPages={2}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(3);
    });

    // 1 2 next
    it('should have three buttons if total page = 2 and page = 1', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={1}
        totalPages={2}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(3);
    });

    // prev 1 2 3 next
    it('should have five buttons if total page = 3 and page = 2', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={2}
        totalPages={3}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(5);
    });

    // prev 1 2 3 4 5 6 7 next
    it('should have nine buttons if total page = 7 and page = 4', () => {
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

    // prev 1 ... 4 5 6 7 8 9 next
    it('should have ten buttons if total page = 9 and page = 6', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={9}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(9);
    });

    // prev 1 2 3 4 5 6 ... 8 next
    it('should have ten buttons if total page = 8 and page = 4', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={4}
        totalPages={8}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(9);
    });

    // prev 1 ... 4 5 6 7 8 ... 10 next
    it('should have eleven buttons if total page = 10 and page = 6', () => {
      const wrapper = shallow(<Pagination
        margin={2}
        page={6}
        totalPages={10}
      />);
      const paginationButtons = wrapper.find('.pagination__button').length;
      const activeButton = wrapper.find('.pagination__button--active').length;
      const nbButtons = paginationButtons + activeButton;
      expect(nbButtons).toEqual(9);
    });
  });
});
