import React from 'react';
import { translate } from 'react-i18next';
import Logo from 'components/UI/Logo/Logo';
import SuccessRegisterMessage from 'components/Register/SuccessRegisterMessage/SuccessRegisterMessage';

const ScreenSuccessRegister = () => (
  <div>
    <header>
      <Logo />
    </header>
    <main>
      <SuccessRegisterMessage />
    </main>
    <footer />
  </div>
);

export { ScreenSuccessRegister };
export default translate()(ScreenSuccessRegister);
