import React from 'react';
import { translate } from 'react-i18next';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';

const SreensLogin = ({ props }) => (
  <div className="login-form__wrapper">
    <h1>{props}</h1>
    <LoginForm {...props} />
    <SignupForm {...props} />
  </div>
);

export { SreensLogin };
export default translate()(SreensLogin);
