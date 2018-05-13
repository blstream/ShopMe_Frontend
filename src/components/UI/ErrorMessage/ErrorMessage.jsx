import React from 'react';
import { translate } from 'react-i18next';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
  const { t } = props;
  return (
    <section className="error-message__main-wrapper">
      <div className="error-message__exclamation">!</div>
      <div className="error-message__text-wrapper">
        <h1 className="error-message__text">{t('components.errorMessage.text')}</h1>
      </div>
    </section>
  );
};

export { ErrorMessage };
export default translate()(ErrorMessage);
