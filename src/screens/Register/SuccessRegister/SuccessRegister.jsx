import React from 'react';
import { translate } from 'react-i18next';
import SuccessRegisterMessage from 'components/Register/SuccessRegisterMessage/SuccessRegisterMessage';

const ScreenSuccessRegister = () => (
  <SuccessRegisterMessage />
);

export { ScreenSuccessRegister };
export default translate()(ScreenSuccessRegister);
