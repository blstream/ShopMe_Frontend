import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';
import GenericCheckbox from 'components/UI/GenericCheckbox/GenericCheckbox';
import GenericSelect from 'components/UI/GenericSelect/GenericSelect';
import AboutMeTextarea from 'components/Register/AboutMeTextarea/AboutMeTextarea';
import FormButton from 'components/UI/FormButton/FormButton';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doValidate: undefined,
      isFormValid: undefined,
      showInvoice: false,
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
        userVoivodeship: undefined,
        userAddressCity: undefined,
        userAdditionalInfo: undefined,
        personalDataConfirm: undefined,
        companyName: undefined,
        companyNip: undefined,
        companyStreet: undefined,
        companyNumber: undefined,
        companyCity: undefined,
        companyZipCode: undefined,
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
        userVoivodeship: undefined,
        userAddressCity: undefined,
        userAdditionalInfo: undefined,
        personalDataConfirm: undefined,
        companyName: undefined,
        companyNip: undefined,
        companyStreet: undefined,
        companyNumber: undefined,
        companyCity: undefined,
        companyZipCode: undefined,
      },
    };

    this.setFieldStateValue = this.setFieldStateValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.checkIsFormValid = this.checkIsFormValid.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setFormState = this.setFormState.bind(this);
    this.showInvoice = this.showInvoice.bind(this);
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

  setFieldStateValue(field, value) {
    if (this.state[field] !== value) {
      this.setState({ [field]: value });
    }
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

  showInvoice() {
    this.setState({ showInvoice: !this.state.showInvoice });
  }

  checkIsFormValid() {
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const isFormIncludesErrors = Object.values(inputsValidationResult).includes(false);

    this.setState({ errorMessage: isFormIncludesErrors, isFormValid: !isFormIncludesErrors });
  }

  gatherFormData() {
    this.setState({ isFormValid: undefined });

    const inputsValue = Object.assign({}, this.state.inputsValue);
    const formData = {
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
    };

    if (inputsValue.userAdditionalInfo) {
      formData.additionalInfo = inputsValue.userAdditionalInfo;
    }

    if (this.state.showInvoice) {
      formData.invoiceRequest = true;
      formData.invoice = {
        companyName: inputsValue.companyName,
        nip: inputsValue.companyNip,
        invoiceAddress: {
          street: inputsValue.companyStreet,
          number: inputsValue.companyNumber,
          city: inputsValue.companyCity,
          zipCode: inputsValue.companyZipCode,
        },
      };
    }

    this.sendFormData(formData);
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
          />
        </div>
        <div className="register-form__item register-form__item--input">
          <GenericSelect
            name="userVoivodeship"
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
            label={t('components.register.voivodeships')}
            selectData={this.props.voivodeships}
            selectNamePath="components.register.voivodeships"
            selectErrorPath="components.UI.categorySelect.errorEmptyField"
            selectOptionsPath="components.UI.voivodeship.list"
            errorClassName="input-select__errorMessage"
            required
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
          />
        </div>
        <div className="register-form__item--input register-form__item--textarea">
          <AboutMeTextarea
            name="userAdditionalInfo"
            maxLength={800}
            ref={(v) => { this.userAdditionalInfo = v; }}
          />
        </div>
        <div className="register-form__item--checkbox">
          <input
            name="invoiceRequest"
            type="checkbox"
            className="register-form__checkbox"
            onChange={this.showInvoice}
          />
          <label
            htmlFor="invoiceRequest"
            className="invoice-request__label"
          >
            {t('components.register.invoiceDataLabel')}
          </label>
        </div>
        {this.state.showInvoice &&
        <div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="companyName"
              type="text"
              label={t('components.register.companyNameInputLabel')}
              required
              validation={validator.validateCompanyName}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}

            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="companyNip"
              type="text"
              label={t('components.register.nipInputLabel')}
              maxLength={13}
              required
              validation={validator.validateNip}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="companyStreet"
              type="text"
              label={t('components.register.streetInputLabel')}
              required
              validation={validator.validateStreet}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="companyNumber"
              type="text"
              label={t('components.register.houseNumberInputLabel')}
              required
              validation={validator.validateHouseNumber}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="companyZipCode"
              type="text"
              label={t('components.register.zipCodeInputLabel')}
              maxLength={6}
              required
              validation={validator.validateZipCode}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="companyCity"
              type="text"
              label={t('components.register.localityInputLabel')}
              maxLength={50}
              required
              validation={validator.validateCity}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}
            />
          </div>
        </div>
        }
        <div className="register-form__item--checkbox">
          <GenericCheckbox
            name="termsAndConditions"
            label={t('components.register.termsAndConditions')}
            validation={validator.validateCheckbox}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          >
            <Link
              className="register__checkbox--link"
              href="/articles/conditions"
              to="/articles/conditions"
              target="_blank"
            >
              {t('components.register.termsAndConditionsLink')}
            </Link>
          </GenericCheckbox>
        </div>
        <div className="register-form__item--checkbox">
          <GenericCheckbox
            name="personalDataConfirm"
            label={t('components.register.personalDataProcessing')}
            validation={validator.validateCheckbox}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
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
