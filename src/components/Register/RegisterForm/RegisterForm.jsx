import React, { Component } from 'react';
import { translate } from 'react-i18next';
import TextInput from 'components/UI/TextInput/TextInput';
import FormButton from 'components/UI/FormButton/FormButton';
import InvoiceInputGroup from 'components/UI/InvoiceInputGroup/InvoiceInputGroup';

import './Register.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { t } = this.props;
    return (
      <form className="register-form">
        <fieldset className="register-form__fieldset">
          <div className="register-form__icon-container">
            <i className="register-form__icon register-form__icon--signup fas fa-user-plus" />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-first-name"
              type="text"
              label={t('components.login.register.firstNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-last-name"
              type="text"
              label={t('components.login.register.lastNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-email"
              type="text"
              label={t('components.login.register.emailInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-password"
              type="password"
              label={t('components.login.register.passwordInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-password2"
              type="password"
              label={t('components.login.register.password2InputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-phone"
              type="text"
              label={t('components.login.register.phoneNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-bank-account"
              type="text"
              label={t('components.login.register.bankAccountInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-street"
              type="text"
              label={t('components.login.register.streetInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-house-number"
              type="text"
              label={t('components.login.register.houseNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-locality"
              type="text"
              label={t('components.login.register.localityInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="register__user-zip-code"
              type="text"
              label={t('components.login.register.zipCodeInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <InvoiceInputGroup />
          <div className="register-form__item register-form__item--button">
            <FormButton
              id="register-form__submit"
              type="submit"
              value={t('components.login.signup.submitButtonLabel')}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { RegisterForm };
export default translate()(RegisterForm);

