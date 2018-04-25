import React from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import Input from 'components/UI/Input/Input';
import FormButton from 'components/UI/FormButton/FormButton';

import './LoginForm.css';

const LoginForm = (props) => {
  const { t } = props;
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <fieldset className="login-form__fieldset">
        <div className="login-form__icon-container">
          <i className="login-form__icon login-form__icon--login far fa-user" aria-hidden="true" />
        </div>
        <h1 className="login-form__title">{t('components.login.login.formTitle')}</h1>
        <div className="login-form__item">
          <GenericInput
            name="login__user-email"
            type="email"
            label={t('components.login.login.emailInputLabel')}
            required
            validation={validator.validateEmailInput}
          />
        </div>
        <div className="login-form__item">
          <Input
            name="login__user-password"
            type="password"
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
      </fieldset>
    </form>
  );
};

export { LoginForm };
export default translate()(LoginForm);
