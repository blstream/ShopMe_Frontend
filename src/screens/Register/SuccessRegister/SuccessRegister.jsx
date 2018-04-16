import React from 'react';
import { translate } from 'react-i18next';
import SuccessRegisterMessage from 'components/Register/SuccessRegisterMessage/SuccessRegisterMessage';
import Layout from 'core/Layout';

const ScreenSuccessRegister = () => (
  <Layout>
    <SuccessRegisterMessage />
  </Layout>
);

export { ScreenSuccessRegister };
export default translate()(ScreenSuccessRegister);
