import React, { Component } from 'react';
import { translate } from 'react-i18next';
import TextInput from 'components/UI/TextInput/TextInput';
import FormButton from 'components/UI/FormButton/FormButton';

import '../Login.css';

class SignupForm extends Component {
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
            <i className="login-form__icon login-form__icon--signup fas fa-user-plus" />
          </div>
          <div className="login-form__item">
            <TextInput
              name="signup__user-first-name"
              type="text"
              label={t('components.login.signup.firstNameInputLabel')}
              required
            />
          </div>
          <div className="login-form__item">
            <TextInput
              name="signup__user-last-name"
              type="text"
              label={t('components.login.signup.lastNameInputLabel')}
              required
            />
          </div>
          <div className="login-form__item">
            <TextInput
              name="signup__user-email"
              type="email"
              label={t('components.login.signup.emailInputLabel')}
              required
            />
          </div>
          <div className="login-form__item login-form__item--button">
            <FormButton
              id="signup-form__submit"
              type="submit"
              value={t('components.login.signup.submitButtonLabel')}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { SignupForm };
export default translate()(SignupForm);
