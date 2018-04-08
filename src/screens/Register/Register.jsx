import React from 'react';
import { translate } from 'react-i18next';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import Header from 'components/UI/Header/Header';

const SreensRegister = (props) => {
  const { t } = props;
  return (
    <div>
      <Header isInvisible />
      <main>
        <h1 className="login-form__title">{t('components.login.register.formTitle')}</h1>
        <div className="register-form__wrapper">
          <RegisterForm location={props.location} />
        </div>
      </main>
      <footer />
    </div>
  );
};

export { SreensRegister };
export default translate()(SreensRegister);
