import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import FormButton from 'components/UI/FormButton/FormButton';
import InvoiceInputGroup from 'components/UI/InvoiceInputGroup/InvoiceInputGroup';
import PersonalDataConfirm from 'components/UI/PersonalDataConfirm/PersonalDataConfirm';

import './Register.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.getInputReferences = this.getInputReferences.bind(this);
  }

  getInputReferences() {
    return [
      this.users__name,
      this.users__surname,
      this.users__email,
      this.users__password,
      this.users__confirmPassword,
      this.users__phoneNumber,
      this.users__bankAccount,
      this.users__addressStreet,
      this.users__addressNumber,
      this.users__addressCity,
      this.users__addressZipCode,
      this.users__personalDataProcessing,
    ];
  }

  checkFormValidity(e) {
    e.preventDefault();
    const isInvoiceChecked = this.users__invoiceInputGroup.getWrappedInstance().state.checked;
    const refs = this.getInputReferences();
    const isRefsValid = refs.map(ref => ref.getWrappedInstance().checkValidity());
    if (isInvoiceChecked) {
      const isInvoiceValid = this.users__invoiceInputGroup.getWrappedInstance().handleSubmit();
      if (!isRefsValid.includes(false) && isInvoiceValid) {
      // Miejsce na POST
      }
    } else if (!isRefsValid.includes(false)) {
      // Miejsce na POST
    }
  }

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <form
          className="register-form"
          onSubmit={this.checkFormValidity}
          noValidate
        >
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
                validation={validator.validateTextInput}
                value={this.props.location.state.name}
                ref={(v) => { this.users__name = v; }}
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
                validation={validator.validateTextInput}
                value={this.props.location.state.surname}
                ref={(v) => { this.users__surname = v; }}
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
                validation={validator.validateTextInput}
                value={this.props.location.state.email}
                ref={(v) => { this.users__email = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__password = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__confirmPassword = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__phoneNumber = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__bankAccount = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__addressStreet = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__addressNumber = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__addressCity = v; }}
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
                validation={validator.validateTextInput}
                ref={(v) => { this.users__addressZipCode = v; }}
              />
            </div>
            <InvoiceInputGroup
              ref={(v) => { this.users__invoiceInputGroup = v; }}
            />
            <div className="register-form__item register-form__item--button">
              <FormButton
                id="users__register-submit"
                type="submit"
                value={t('components.login.signup.submitButtonLabel')}
              />
            </div>
            <div className="register-form__item--checkbox">
              <PersonalDataConfirm
                validation={validator.validateCheckbox}
                ref={(v) => { this.users__personalDataProcessing = v; }}
              />
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export { RegisterForm };
export default translate('translations', { withRef: true })(RegisterForm);
