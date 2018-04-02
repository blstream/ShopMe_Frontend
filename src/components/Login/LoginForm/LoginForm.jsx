import React, { Component } from 'react';
import { translate } from 'react-i18next';
import TextInput from 'components/UI/TextInput/TextInput';
import FormButton from 'components/UI/FormButton/FormButton';

import '../Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { t } = this.props;
    return (
      <form className="login-form">
        <fieldset className="login-form__fieldset">
          <div className="login-form__icon-container">
            <i className="login-form__icon login-form__icon--login far fa-user" />
          </div>
          <div className="login-form__item">
            <TextInput
              name="login__user-email"
              type="email"
              label={t('components.login.login.emailInputLabel')}
              required
            />
          </div>
          <div className="login-form__item">
            <TextInput
              name="login__user-password"
              type="password"
              label={t('components.login.login.passwordInputLabel')}
              required
            />
          </div>
          <div className="login-form__item login-form__item--button">
            <FormButton
              id="login-form__submi-form"
              type="submit"
              value={t('components.login.login.submitButtonLabel')}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { LoginForm };
export default translate()(LoginForm);
