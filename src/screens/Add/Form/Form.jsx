import React from 'react';
import { translate } from 'react-i18next';
import AddForm from 'components/Add/Form/Form';
import Logo from 'components/UI/Logo';

import './Form.css';

const SreensAddForm = (props) => {
  const { t } = props;
  return (
    <div className="screens-add-form__wrapper">
      <Logo />
      <AddForm>{t('Dodaje Ofertę')}</AddForm>
    </div>
  );
};

export { SreensAddForm };
export default translate()(SreensAddForm);
