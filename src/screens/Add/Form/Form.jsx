import React from 'react';
import { translate } from 'react-i18next';
import AddForm from 'components/Add/Form/Form';

import './Form.css';

const SreensAddForm = (props) => {
  const { t } = props;
  return (
    <div className="screens-add-form__wrapper">
      <div className="screens-add-form__logo">{t('ShopMe')}</div>
      <AddForm />
    </div>
  );
};

export { SreensAddForm };
export default translate()(SreensAddForm);
