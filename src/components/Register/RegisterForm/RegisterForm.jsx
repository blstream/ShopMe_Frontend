import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';
import GenericSelect from 'components/UI/GenericSelect/GenericSelect';
import FormButton from 'components/UI/FormButton/FormButton';
import PersonalDataConfirm from './PersonalDataConfirm/PersonalDataConfirm';
import InvoiceInputGroup from './InvoiceInputGroup/InvoiceInputGroup';
import TermsAndConditionsCheckbox from './TermsAndConditionsCheckbox/TermsAndConditionsCheckbox';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doValidate: undefined,
      isFormValid: undefined,
      isInvoiceInputsGroupChecked: undefined,
      inputsValue: {
        userName: undefined,
        userSurname: undefined,
        userEmail: undefined,
        userPassword: undefined,
        userPhoneNumber: undefined,
        userBankAccount: undefined,
        userAddressStreet: undefined,
        userAddressNumber: undefined,
        userAddressZipCode: undefined,
        userAddressCity: undefined,
        userVoivodeship: undefined,
      },
      inputsValidationResult: {
        userName: undefined,
        userSurname: undefined,
        userEmail: undefined,
        userPassword: undefined,
        userPhoneNumber: undefined,
        userBankAccount: undefined,
        userAddressStreet: undefined,
        userAddressNumber: undefined,
        userAddressZipCode: undefined,
        userAddressCity: undefined,
        userVoivodeship: undefined,
        userPersonalDataProcessing: undefined,
        userTermsAndConditionsCheckbox: undefined,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.setFormState = this.setFormState.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.setValue = this.setValue.bind(this);
    this.checkIsFormValid = this.checkIsFormValid.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
    this.setIsChecked = this.setIsChecked.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isFormValid) {
      this.gatherFormData();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ doValidate: true });
  }

  setFormState(obj, key, val, callback) {
    this.setState(prevState => ({
      ...prevState,
      doValidate: undefined,
      [obj]: {
        ...prevState[obj],
        [key]: val,
      },
    }), callback);
  }

  setIsValid(name, val) {
    this.setFormState('inputsValidationResult', name, val, this.checkIsFormValid);
  }

  setValue(name, val) {
    this.setFormState('inputsValue', name, val);
  }

  setIsChecked(isInvoiceInputsGroupChecked) {
    this.setState({ isInvoiceInputsGroupChecked });
  }

  checkIsFormValid() {
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const isFormIncludesErrors = Object.values(inputsValidationResult).includes(false);

    this.setState({ isFormValid: !isFormIncludesErrors });
  }

  gatherFormData() {
    console.log('from register', this.state);
    this.setState({ isFormValid: undefined });

    const inputsValue = Object.assign({}, this.state.inputsValue);
    let formData =
      {
        name: inputsValue.userName,
        surname: inputsValue.userSurname,
        email: inputsValue.userEmail,
        password: inputsValue.userPassword,
        phoneNumber: inputsValue.userPhoneNumber,
        bankAccount: inputsValue.userBankAccount,
        address: {
          street: inputsValue.userAddressStreet,
          number: inputsValue.userAddressNumber,
          city: inputsValue.userAddressCity,
          zipCode: inputsValue.userAddressZipCode,
        },
        voivodeship: {
          name: inputsValue.userVoivodeship,
        },
        invoiceRequest: false,
      };

    if (this.state.isInvoiceInputsGroupChecked && this.state.isInvoiceInputsGroupValid) {
      formData.invoiceRequest = true;
      const userInvoiceInputGroup = Object.assign({}, this.state.inputsValue.userInvoiceInputGroup);
      const invoiceInputGroupData =
        {
          invoice: {
            companyName: userInvoiceInputGroup.userInvoiceCompanyName,
            nip: userInvoiceInputGroup.userInvoiceNip,
            invoiceAddress: {
              street: userInvoiceInputGroup.userInvoiceAddressStreet,
              number: userInvoiceInputGroup.userInvoiceAddressNumber,
              city: userInvoiceInputGroup.userInvoiceAddressCity,
              zipCode: userInvoiceInputGroup.userInvoiceAddressZipCode,
            },
          },
        };
      formData = Object.assign({}, formData, invoiceInputGroupData);
    }


    console.log(formData);
    // this.sendFormData(formData);
  }

  sendFormData(data) {
    this.props.fetchData(data);
  }

  render() {
    const { t } = this.props;
    return (
      <form
        className="register-form"
        onSubmit={this.onSubmit}
        noValidate
      >
        <h1 className="register-form__title">{t('components.register.formTitle')}</h1>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userName"
            type="text"
            label={t('components.register.firstNameInputLabel')}
            maxLength={20}
            required
            validation={validator.validateNameInput}
            value={this.props.location.state ? this.props.location.state.name : ''}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userSurname"
            type="text"
            label={t('components.register.lastNameInputLabel')}
            maxLength={50}
            required
            validation={validator.validateSurnameInput}
            value={this.props.location.state ? this.props.location.state.surname : ''}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userEmail"
            type="text"
            label={t('components.register.emailInputLabel')}
            required
            validation={validator.validateEmailInput}
            value={this.props.location.state ? this.props.location.state.email : ''}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userPassword"
            type="password"
            label={t('components.register.passwordInputLabel')}
            maxLength={30}
            required
            validation={validator.validatePassword}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="Dzdmos#423"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userPhoneNumber"
            type="text"
            label={t('components.register.phoneNumberInputLabel')}
            maxLength={10}
            required
            validation={validator.validatePhoneNumber}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="1111111111"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userBankAccount"
            type="text"
            label={t('components.register.bankAccountInputLabel')}
            maxLength={26}
            required
            validation={validator.validateBankAccount}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="11111111111111111111111111"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userAddressStreet"
            type="text"
            label={t('components.register.streetInputLabel')}
            required
            validation={validator.validateStreet}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="qwdqwd"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userAddressNumber"
            type="text"
            label={t('components.register.houseNumberInputLabel')}
            required
            validation={validator.validateHouseNumber}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="12"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userAddressZipCode"
            type="text"
            label={t('components.register.zipCodeInputLabel')}
            maxLength={6}
            required
            validation={validator.validateZipCode}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="23-123"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <GenericSelect
            name="userVoivodeship"
            label={t('components.register.voivodeships')}
            selectData={this.props.voivodeships}
            selectNamePath="components.register.voivodeships"
            selectErrorPath="components.UI.categorySelect.errorEmptyField"
            selectOptionsPath="components.UI.voivodeship.list"
            errorClassName="input-select__errorMessage"
            required
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="GreaterPoland"
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <Input
            name="userAddressCity"
            type="text"
            label={t('components.register.cityInputLabel')}
            maxLength={50}
            required
            validation={validator.validateCity}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            value="asdasd"
          />
        </div>
        <InvoiceInputGroup
          ref={(v) => { this.users__invoiceInputGroup = v; }}
          name="userInvoiceInputGroup"
          onValidate={this.state.doValidate}
          doValidate={this.setIsValid}
          setValue={this.setValue}
          setIsChecked={this.setIsChecked}
        />
        <TermsAndConditionsCheckbox
          name="userTermsAndConditionsCheckbox"
          onValidate={this.state.doValidate}
          doValidate={this.setIsValid}
          setValue={this.setValue}
        />
        <PersonalDataConfirm
          name="userPersonalDataProcessing"
          validation={validator.validateCheckbox}
          onValidate={this.state.doValidate}
          doValidate={this.setIsValid}
          setValue={this.setValue}
        />
        <div className="register-form__item register-form__item--button">
          <FormButton
            id="users__register-submit"
            type="submit"
            value={t('components.signup.submitButtonLabel')}
          />
        </div>
      </form>
    );
  }
}

export { RegisterForm };
export default translate('translations', { withRef: true })(RegisterForm);
