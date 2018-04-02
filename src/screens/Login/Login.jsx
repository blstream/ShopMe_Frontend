import React from 'react';
import { translate } from 'react-i18next';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';
import Logo from 'components/UI/Logo';

const SreensLogin = () => (
  <div>
    <header>
      <Logo />
      <nav />
    </header>
    <content>
      <div className="login-form__wrapper">
        <LoginForm />
        <SignupForm />
      </div>
    </content>
    <footer />
  </div>
);

export { SreensLogin };
export default translate()(SreensLogin);
