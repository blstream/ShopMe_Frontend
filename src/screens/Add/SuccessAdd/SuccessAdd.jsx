import React from 'react';
import { translate } from 'react-i18next';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';
import Layout from 'core/Layout';

const ScreenSuccessAdd = () => (
  <Layout>
    <SuccessMessage />
  </Layout>
);

export { ScreenSuccessAdd };
export default translate()(ScreenSuccessAdd);
