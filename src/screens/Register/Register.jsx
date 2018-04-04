import React from 'react';
import { translate } from 'react-i18next';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import Logo from 'components/UI/Logo';

const SreensRegister = () => (
  <div>
    <header>
      <Logo />
      <nav />
    </header>
    <content>
      <h1 className="login-form__title">Rejestracja użytkownika</h1>
      <div className="register-form__wrapper">
        <RegisterForm />
      </div>
    </content>
    <footer />
  </div>
);

export { SreensRegister };
export default translate()(SreensRegister);
