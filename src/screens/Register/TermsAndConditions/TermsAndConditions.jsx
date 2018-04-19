import React from 'react';
import { translate } from 'react-i18next';
import TermsAndConditions from 'components/Register/TermsAndConditions/TermsAndConditions';
import Layout from 'core/Layout';

const ScreenTermsAndConditions = () => (
  <Layout>
    <TermsAndConditions />
  </Layout>
);

export { ScreenTermsAndConditions };
export default translate()(ScreenTermsAndConditions);
