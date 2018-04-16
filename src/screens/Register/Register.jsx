import React from 'react';
import { translate } from 'react-i18next';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import { Layout } from 'core/Layout';

const SreensRegister = props => (
  <Layout>
    <RegisterForm location={props.location} />
  </Layout>
);

export { SreensRegister };
export default translate()(SreensRegister);
