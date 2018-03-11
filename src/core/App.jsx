import React from 'react';
import { I18nextProvider } from 'react-i18next';
import Routes from 'core/Routes';
import i18n from 'core/i18n';

export default () => (
  <I18nextProvider i18n={i18n}>
    <Routes />
  </I18nextProvider>
);
