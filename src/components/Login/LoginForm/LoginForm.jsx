import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';
import FormButton from 'components/UI/FormButton/FormButton';

import './LoginForm.css';

const LoginForm = (props) => {
  const { t } = props;
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <h1 className="login-form__title">{t('components.login.login.formTitle')}</h1>
      <div className="login-form__item login-form__item--input">
        <Input
          name="login__user-email"
          type="email"
          label={t('components.login.login.emailInputLabel')}
          required
          validation={validator.validateEmailInput}
        />
      </div>
      <div className="login-form__item login-form__item--input">
        <Input
          name="login__user-password"
          type="password"
          maxLength={30}
          label={t('components.login.login.passwordInputLabel')}
          required
          validation={validator.validatePassword}
        />
      </div>
      <div className="login-form__item login-form__item--button">
        <FormButton
          id="login-form__submit-form"
          type="submit"
          value={t('components.login.login.submitButtonLabel')}
        />
      </div>
      <div className="login-form__register-link">
        {t('components.login.login.text')}<br />
        <Link href="/signup" to="/signup">{t('components.login.login.link')}</Link>
      </div>
    </form>
  );
};

export { LoginForm };
export default translate()(LoginForm);
