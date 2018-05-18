import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';

class InvoiceInputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      doValidate: undefined,
      isFormValid: undefined,
      inputsValue: {
        userInvoiceCompanyName: undefined,
        userInvoiceNip: undefined,
        userInvoiceAddressStreet: undefined,
        userInvoiceAddressNumber: undefined,
        userInvoiceAddressZipCode: undefined,
        userInvoiceAddressCity: undefined,
      },
      inputsValidationResult: {
        userInvoiceCompanyName: undefined,
        userInvoiceNip: undefined,
        userInvoiceAddressStreet: undefined,
        userInvoiceAddressNumber: undefined,
        userInvoiceAddressZipCode: undefined,
        userInvoiceAddressCity: undefined,
      },
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.setFormState = this.setFormState.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.setValue = this.setValue.bind(this);
    this.checkIsFormValid = this.checkIsFormValid.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onValidate && this.state.checked) {
      this.setState({ doValidate: nextProps.onValidate });
    }
  }

  componentDidUpdate() {
    if (this.state.isFormValid) {
      console.log(this.state.inputsValue);
      // this.props.setValue(this.props.name, this.state.inputsValue);
      // this.props.doValidate(this.props.name, this.state.isFormValid);
    }
  }

  setFormState(obj, key, val, callback) {
    this.setState(prevState => ({
      ...prevState,
      doValidate: undefined,
      isFormValid: undefined,
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

  checkIsFormValid() {
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const isFormIncludesErrors = Object.values(inputsValidationResult).includes(false);

    this.setState({ isFormValid: !isFormIncludesErrors });
  }

  handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.setIsChecked(!this.state.checked);
  }

  render() {
    const { t } = this.props;

    const content = this.state.checked
      ?
      (
        <div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="userInvoiceCompanyName"
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
              name="userInvoiceNip"
              type="text"
              label={t('components.register.nipInputLabel')}
              maxLength={10}
              required
              validation={validator.validateNip}
              onValidate={this.state.doValidate}
              doValidate={this.setIsValid}
              setValue={this.setValue}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="userInvoiceAddressStreet"
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
              name="userInvoiceAddressNumber"
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
              name="userInvoiceAddressZipCode"
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
              name="userInvoiceAddressCity"
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
        </div>)
      : null;

    return (
      <div className="register-form__checkbox-wrapper">
        <div className="register-form__item--checkbox">
          <input
            id="invoiceCheckbox"
            name="invoiceCheckbox"
            type="checkbox"
            className="register-form__checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="invoiceCheckbox"
          >
            {t('components.register.invoiceDataLabel')}
          </label>
        </div>
        {content}
      </div>
    );
  }
}

export { InvoiceInputGroup };
export default translate('translations', { withRef: true })(InvoiceInputGroup);
