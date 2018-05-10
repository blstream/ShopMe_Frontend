import React from 'react';
import { translate } from 'react-i18next';
import SuccessRegisterMessage from 'components/Register/SuccessRegisterMessage/SuccessRegisterMessage';

const SuccessRegisterScreen = () => (
  <SuccessRegisterMessage />
);

export { SuccessRegisterScreen };
export default translate()(SuccessRegisterScreen);
