import React from 'react';
import { translate } from 'react-i18next';
import AddForm from 'components/Add/Form/Form';
import Header from 'components/UI/Header/Header';

const SreensAddForm = () => (
  <div>
    <Header isInvisible />
    <main>
      <AddForm />
    </main>
    <footer />
  </div>
);

export { SreensAddForm };
export default translate()(SreensAddForm);
