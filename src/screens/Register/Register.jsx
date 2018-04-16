import React from 'react';
import { translate } from 'react-i18next';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';

const SreensRegister = props => (
  <RegisterForm location={props.location} />
);

export { SreensRegister };
export default translate()(SreensRegister);
