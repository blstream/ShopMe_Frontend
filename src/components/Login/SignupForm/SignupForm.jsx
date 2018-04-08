import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import Validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import FormButton from 'components/UI/FormButton/FormButton';

import '../Login.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users__name: '',
      users__surname: '',
      users__email: '',
    };
    this.validator = new Validator();
    this.setFieldStateValues = this.setFieldStateValues.bind(this);
  }

  setFieldStateValues(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    const { t } = this.props;
    return (
      <form
        className="login-form"
        noValidate
      >
        <fieldset className="login-form__fieldset">
          <div className="login-form__icon-container">
            <i className="login-form__icon login-form__icon--signup fas fa-user-plus" />
          </div>
          <h1 className="login-form__title">{t('components.login.signup.formTitle')}</h1>
          <div className="login-form__item">
            <GenericInput
              name="users__name"
              type="text"
              label={t('components.login.signup.firstNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="30"
              required
              validation={this.validator.validateTextInput}
              onChange={this.setFieldStateValues}
            />
          </div>
          <div className="login-form__item">
            <GenericInput
              name="users__surname"
              type="text"
              label={t('components.login.signup.lastNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
              onChange={this.setFieldStateValues}
            />
          </div>
          <div className="login-form__item">
            <GenericInput
              name="users__email"
              type="email"
              label={t('components.login.signup.emailInputLabel')}
              color="yellow"
              size="M"
              required
              validation={this.validator.validateTextInput}
              onChange={this.setFieldStateValues}
            />
          </div>
          <div className="login-form__item login-form__item--button">
            <Link
              href="/register"
              to={{
                pathname: '/register',
                state: {
                  name: this.state.users__name,
                  surname: this.state.users__surname,
                  email: this.state.users__email,
                },
              }}
            >
              <FormButton
                id="signup-form__submit"
                type="submit"
                value={t('components.login.signup.submitButtonLabel')}
              />
            </Link>
          </div>
        </fieldset>
      </form>
    );
  }
}

export { SignupForm };
export default translate()(SignupForm);
