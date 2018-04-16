import React from 'react';
import { translate } from 'react-i18next';
import AddForm from 'components/Add/Form/Form';
import Layout from 'core/Layout';

const SreensAddForm = () => (
  <Layout>
    <AddForm />
  </Layout>
);

export { SreensAddForm };
export default translate()(SreensAddForm);
