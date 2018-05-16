import React from 'react';
import { translate } from 'react-i18next';
import './Error.css';

const AppError = (props) => {
  const { t } = props;
  return (
    <section className="app-error__main-wrapper">
      <div className="app-error__exclamation">!</div>
      <div className="app-error__text-wrapper">
        <h1 className="app-error__text">{t('components.errorMessage.text')}</h1>
      </div>
    </section>
  );
};

export { AppError };
export default translate()(AppError);
