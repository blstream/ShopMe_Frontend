import React from 'react';
import { translate } from 'react-i18next';
import AddForm from 'components/Add/Form/Form';
import Logo from 'components/UI/Logo';

import './Form.css';

const SreensAddForm = (props) => {
  const { t } = props;
  return (
    <div className="screens-add-form__wrapper">
      <header>
        <nav>
          <Logo />
        </nav>
      </header>
      <main>
        <AddForm>{t('components.add.form.title')}</AddForm>
      </main>
      <footer />
    </div>
  );
};

export { SreensAddForm };
export default translate()(SreensAddForm);
