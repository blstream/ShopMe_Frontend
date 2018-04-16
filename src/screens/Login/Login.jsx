import React from 'react';
import { translate } from 'react-i18next';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';
import Layout from 'core/Layout';

const SreensLogin = () => (
  <Layout className="login-form__wrapper">
    <LoginForm />
    <SignupForm />
  </Layout>
);

export { SreensLogin };
export default translate()(SreensLogin);
