import React, { Component } from 'react';
import { translate } from 'react-i18next';

import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import Input from 'components/UI/Input/Input';
import GenericSelect from 'components/UI/GenericSelect/GenericSelect';
import FormButton from 'components/UI/FormButton/FormButton';
import PersonalDataConfirm from './PersonalDataConfirm/PersonalDataConfirm';
import InvoiceInputGroup from './InvoiceInputGroup/InvoiceInputGroup';
import TermsAndConditionsCheckbox from './TermsAndConditionsCheckbox/TermsAndConditionsCheckbox';


import './Register.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.getInputReferences = this.getInputReferences.bind(this);
    this.setFormData = this.setFormData.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
  }

  getInputReferences() {
    return [
      this.users__name,
      this.users__surname,
      this.users__email,
      this.users__password,
      this.users__phoneNumber,
      this.users__bankAccount,
      this.users__addressStreet,
      this.users__addressNumber,
      this.users__addressCity,
      this.voivodeshipSelect,
      this.users__addressZipCode,
      this.users__personalDataProcessing,
      this.users__termsAndConditionsCheckbox,
    ];
  }

  setFormData(isInvoiceRequired) {
    let formData;

    const allVoivodeships = this.voivodeshipSelect.getWrappedInstance().state.selectData;
    const voivodeshipName = this.voivodeshipSelect.getWrappedInstance().state.value;
    const targetVoivodeship =
    allVoivodeships.find(voivodeship => voivodeship.name === voivodeshipName);

    formData =
      {
        name: this.users__name.getWrappedInstance().state.value,
        surname: this.users__surname.getWrappedInstance().state.value,
        email: this.users__email.getWrappedInstance().state.value,
        password: this.users__password.getWrappedInstance().state.value,
        phoneNumber: this.users__phoneNumber.getWrappedInstance().state.value,
        bankAccount: this.users__bankAccount.getWrappedInstance().state.value,
        address: {
          street: this.users__addressStreet.getWrappedInstance().state.value,
          number: this.users__addressNumber.getWrappedInstance().state.value,
          city: this.users__addressCity.getWrappedInstance().state.value,
          zipCode: this.users__addressZipCode.getWrappedInstance().state.value,
        },
        voivodeship: {
          id: targetVoivodeship.id,
          name: voivodeshipName,
        },
        invoiceRequest: false,
      };

    if (isInvoiceRequired) {
      formData.invoiceRequest = true;
      const invoceData = this.users__invoiceInputGroup.getWrappedInstance().getFormInvoiceData();
      const invoicePostData =
        {
          invoice: {
            companyName: invoceData.companyName,
            nip: invoceData.nip,
            invoiceAddress: {
              street: invoceData.invoiceAddress.street,
              number: invoceData.invoiceAddress.number,
              city: invoceData.invoiceAddress.city,
              zipCode: invoceData.invoiceAddress.zipCode,
            },
          },
        };
      formData = Object.assign({}, formData, invoicePostData);
    }
    return formData;
  }

  sendFormData(data) {
    this.props.fetchData(data);
  }

  checkFormValidity(e) {
    e.preventDefault();
    const isInvoiceChecked = this.users__invoiceInputGroup.getWrappedInstance().state.checked;
    const refs = this.getInputReferences();
    const isRefsValid = refs.map(ref => ref.getWrappedInstance().checkValidity());
    if (isInvoiceChecked) {
      const isInvoiceValid = this.users__invoiceInputGroup.getWrappedInstance().handleSubmit();
      if (!isRefsValid.includes(false) && isInvoiceValid) {
        const postData = this.setFormData(true);
        this.sendFormData(postData);
      }
    } else if (!isRefsValid.includes(false)) {
      const postData = this.setFormData();
      this.sendFormData(postData);
    }
  }

  render() {
    const { t } = this.props;
    return (
      <form
        className="register-form"
        onSubmit={this.checkFormValidity}
        noValidate
      >
        <fieldset className="register-form__fieldset">
          <div className="register-form__icon-container">
            <i className="register-form__icon register-form__icon--signup fas fa-user-plus" aria-hidden="true" />
          </div>
          <h1 className="login-form__title">{t('components.login.register.formTitle')}</h1>
          <div className="register-form__item">
            <GenericInput
              name="users__name"
              type="text"
              label={t('components.login.register.firstNameInputLabel')}
              maxLength={20}
              required
              validation={validator.validateNameInput}
              value={this.props.location.state.name}
              ref={(v) => { this.users__name = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__surname"
              type="text"
              label={t('components.login.register.lastNameInputLabel')}
              maxLength={50}
              required
              validation={validator.validateSurnameInput}
              value={this.props.location.state.surname}
              ref={(v) => { this.users__surname = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__email"
              type="text"
              label={t('components.login.register.emailInputLabel')}
              required
              validation={validator.validateEmailInput}
              value={this.props.location.state.email}
              ref={(v) => { this.users__email = v; }}
            />
          </div>
          <div className="register-form__item">
            <Input
              name="users__password"
              type="password"
              label={t('components.login.register.passwordInputLabel')}
              maxLength={30}
              required
              validation={validator.validatePassword}
              ref={(v) => { this.users__password = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__phone-number"
              type="text"
              label={t('components.login.register.phoneNumberInputLabel')}
              maxLength={10}
              required
              validation={validator.validatePhoneNumber}
              ref={(v) => { this.users__phoneNumber = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__bank-account"
              type="text"
              label={t('components.login.register.bankAccountInputLabel')}
              maxLength={26}
              required
              validation={validator.validateBankAccount}
              ref={(v) => { this.users__bankAccount = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-street"
              type="text"
              label={t('components.login.register.streetInputLabel')}
              required
              validation={validator.validateStreet}
              ref={(v) => { this.users__addressStreet = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-number"
              type="text"
              label={t('components.login.register.houseNumberInputLabel')}
              required
              validation={validator.validateHouseNumber}
              ref={(v) => { this.users__addressNumber = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-zip-code"
              type="text"
              label={t('components.login.register.zipCodeInputLabel')}
              maxLength={6}
              required
              validation={validator.validateZipCode}
              ref={(v) => { this.users__addressZipCode = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users__address-city"
              type="text"
              label={t('components.login.register.cityInputLabel')}
              maxLength={50}
              required
              validation={validator.validateCity}
              ref={(v) => { this.users__addressCity = v; }}
            />
          </div>
          <div className="register-form__item">
            <GenericSelect
              name="offer__voivodeship"
              ref={(v) => { this.voivodeshipSelect = v; }}
              label={t('components.login.register.voivodeships')}
              endpoint="voivodeships"
              selectNamePath="components.login.register.voivodeships"
              selectErrorPath="components.UI.categorySelect.errorEmptyField"
              selectOptionsPath="components.UI.voivodeship.list"
              labelClassName=".select_span--yellow"
              selectClassName="input-select input-select--yellow input-select--inline"
              selectItemClassName="input-select__item-option--yellow"
              errorClassName="input-select__errorMessage input-select__errorMessage2"
              required
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
            <TermsAndConditionsCheckbox
              ref={(v) => { this.users__termsAndConditionsCheckbox = v; }}
            />
            <PersonalDataConfirm
              validation={validator.validateCheckbox}
              ref={(v) => { this.users__personalDataProcessing = v; }}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { RegisterForm };
export default translate('translations', { withRef: true })(RegisterForm);
