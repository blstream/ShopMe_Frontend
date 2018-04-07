import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import FormButton from 'components/UI/FormButton/FormButton';
import InvoiceInputGroup from 'components/UI/InvoiceInputGroup/InvoiceInputGroup';
import PersonalDataConfirm from 'components/UI/PersonalDataConfirm/PersonalDataConfirm';

import './Register.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.validator = new Validator();
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
            <GenericInput
              name="users__name"
              type="text"
              label={t('components.login.register.firstNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
              value={this.props.location.state.name}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__surname"
              type="text"
              label={t('components.login.register.lastNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
              value={this.props.location.state.surname}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__email"
              type="text"
              label={t('components.login.register.emailInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
              value={this.props.location.state.email}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__password"
              type="password"
              label={t('components.login.register.passwordInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__confirm-password"
              type="password"
              label={t('components.login.register.confirmPasswordInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__phone-number"
              type="text"
              label={t('components.login.register.phoneNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__bank-account"
              type="text"
              label={t('components.login.register.bankAccountInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-street"
              type="text"
              label={t('components.login.register.streetInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-number"
              type="text"
              label={t('components.login.register.houseNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-city"
              type="text"
              label={t('components.login.register.localityInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-zip-code"
              type="text"
              label={t('components.login.register.zipCodeInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateTextInput}
            />
          </div>
          <InvoiceInputGroup />
          <div className="register-form__item register-form__item--button">
            <FormButton
              id="users__register-submit"
              type="submit"
              value={t('components.login.signup.submitButtonLabel')}
            />
          </div>
          <div className="register-form__item--checkbox">
            <PersonalDataConfirm />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { RegisterForm };
export default translate()(RegisterForm);
