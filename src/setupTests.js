/* eslint-disable react/jsx-filename-extension */
import 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme config. See http://airbnb.io/enzyme/docs/installation/ for more details.
configure({ adapter: new Adapter() });

// Mock `fetch`. See https://github.com/jefflau/jest-fetch-mock for more details.
global.fetch = require('jest-fetch-mock'); // eslint-disable-line import/no-extraneous-dependencies

// Make sure that all components receive function `t` in props. See https://react.i18next.com/misc/testing for more details.
jest.mock('react-i18next', () => ({
  translate: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' }; // eslint-disable-line no-param-reassign
    return Component;
  },
}));
