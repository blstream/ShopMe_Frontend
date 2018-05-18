import React from 'react';
import { translate } from 'react-i18next';

import './SuccessMessage.css';

const SuccessMessage = (props) => {
  const { t } = props;
  return (
    <section className="success-message__main-wrapper">
      <div className="success-message__text-wrapper">
        <h1 className="success-message__text success-message__text--green">{t('components.add.successMessage.text')}</h1>
      </div>
    </section>
  );
};

export { SuccessMessage };
export default translate()(SuccessMessage);
