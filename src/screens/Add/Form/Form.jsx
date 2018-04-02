import React from 'react';
import { translate } from 'react-i18next';
import AddForm from 'components/Add/Form/Form';
import Logo from 'components/UI/Logo';

const SreensAddForm = () => (
  <div>
    <header>
      <Logo />
      <nav />
    </header>
    <content>
      <AddForm />
    </content>
    <footer />
  </div>
);

export { SreensAddForm };
export default translate()(SreensAddForm);
