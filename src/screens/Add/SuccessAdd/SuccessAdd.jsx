import React from 'react';
import { translate } from 'react-i18next';
import Header from 'components/UI/Header/Header';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';

const ScreenSuccessAdd = () => (
  <div>
    <Header />
    <main>
      <SuccessMessage />
    </main>
    <footer />
  </div>
);

export { ScreenSuccessAdd };
export default translate()(ScreenSuccessAdd);
