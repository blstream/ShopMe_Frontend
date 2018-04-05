import React from 'react';
import { translate } from 'react-i18next';
import Logo from 'components/UI/Logo/Logo';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';

const ScreenSuccessAdd = () => (
  <div>
    <header>
      <Logo />
    </header>
    <main>
      <SuccessMessage />
    </main>
    <footer />
  </div>
);

export { ScreenSuccessAdd };
export default translate()(ScreenSuccessAdd);
