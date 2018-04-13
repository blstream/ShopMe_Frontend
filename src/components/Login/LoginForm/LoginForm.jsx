import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import FormButton from 'components/UI/FormButton/FormButton';

import '../Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    document.cookie = 'userToken=test';
    const isUserLogged = !!document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (isUserLogged) {
      this.setState({ fireRedirect: true });
    }
  }

  render() {
    const { t } = this.props;
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <fieldset className="login-form__fieldset">
          <div className="login-form__icon-container">
            <i className="login-form__icon login-form__icon--login far fa-user" />
          </div>
          <h1 className="login-form__title">{t('components.login.login.formTitle')}</h1>
          <div className="login-form__item">
            <GenericInput
              name="login__user-email"
              type="email"
              label={t('components.login.login.emailInputLabel')}
              color="yellow"
              size="M"
              required
              validation={validator.validateTextInput}
            />
          </div>
          <div className="login-form__item">
            <GenericInput
              name="login__user-password"
              type="password"
              label={t('components.login.login.passwordInputLabel')}
              color="yellow"
              size="M"
              required
              validation={validator.validateTextInput}
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
        {this.state.fireRedirect && (
          <Redirect to="/" />
        )}
      </form>
    );
  }
}

export { LoginForm };
export default translate()(LoginForm);
