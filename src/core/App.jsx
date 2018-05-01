import React from 'react';
import I18nextProvider from 'core/I18nextProvider';
import Routes from 'core/Routes';
import 'components/index.css';

export default () => (
  <I18nextProvider>
    <Routes />
  </I18nextProvider>
);
