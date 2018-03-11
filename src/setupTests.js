/* eslint-disable react/jsx-filename-extension */

import React from 'react';

// Mock `fetch`. See https://github.com/jefflau/jest-fetch-mock for more details
global.fetch = require('jest-fetch-mock'); // eslint-disable-line import/no-extraneous-dependencies

// Make sure that all components receive function `t` in props
jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));
