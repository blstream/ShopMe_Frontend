import React from 'react';
import { translate } from 'react-i18next';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';
import Header from 'components/UI/Header/Header';

const SreensLogin = () => (
  <div>
    <Header />
    <main>
      <div className="login-form__wrapper">
        <LoginForm />
        <SignupForm />
      </div>
    </main>
    <footer />
  </div>
);

export { SreensLogin };
export default translate()(SreensLogin);
