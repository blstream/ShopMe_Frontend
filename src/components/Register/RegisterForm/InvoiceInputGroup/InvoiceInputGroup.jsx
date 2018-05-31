import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';

class InvoiceInputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      users_invoiceCompanyName: '',
      users_invoiceNip: '',
      users_invoiceAddressStreet: '',
      users_invoiceAddressNumber: '',
      users_invoiceAddressZipCode: '',
      users_invoiceAddressCity: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.getFormInvoiceData = this.getFormInvoiceData.bind(this);
  }

  getInputReferences() {
    return [
      this.users_invoiceCompanyName,
      this.users_invoiceNip,
      this.users_invoiceAddressStreet,
      this.users_invoiceAddressNumber,
      this.users_invoiceAddressZipCode,
      this.users_invoiceAddressCity,
    ];
  }

  getFormInvoiceData() {
    const invoice = {
      companyName: this.state.users_invoiceCompanyName,
      nip: this.state.users_invoiceNip,
      invoiceAddress: {
        street: this.state.users_invoiceAddressStreet,
        number: this.state.users_invoiceAddressNumber,
        city: this.state.users_invoiceAddressCity,
        zipCode: this.state.users_invoiceAddressZipCode,
      },
    };
    return invoice;
  }

  handleSubmit() {
    if (this.state.checked) {
      const refs = this.getInputReferences();
      const isRefsValid = refs.map(ref => ref.getWrappedInstance().checkValidity());
      if (!isRefsValid.includes(false)) {
        return true;
      }
    }
    return false;
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { t } = this.props;

    const content = this.state.checked
      ?
      (
        <div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="users_invoiceCompanyName"
              type="text"
              label={t('components.register.companyNameInputLabel')}
              required
              validation={validator.validateCompanyName}
              ref={(v) => { this.users_invoiceCompanyName = v; }}
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="users_invoiceNip"
              type="text"
              label={t('components.register.nipInputLabel')}
              maxLength={13}
              required
              validation={validator.validateNip}
              ref={(v) => { this.users_invoiceNip = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="users_invoiceAddressStreet"
              type="text"
              label={t('components.register.streetInputLabel')}
              required
              validation={validator.validateStreet}
              ref={(v) => { this.users_invoiceAddressStreet = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="users_invoiceAddressNumber"
              type="text"
              label={t('components.register.houseNumberInputLabel')}
              required
              validation={validator.validateHouseNumber}
              ref={(v) => { this.users_invoiceAddressNumber = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="users_invoiceAddressZipCode"
              type="text"
              label={t('components.register.zipCodeInputLabel')}
              maxLength={6}
              required
              validation={validator.validateZipCode}
              ref={(v) => { this.users_invoiceAddressZipCode = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item register-form__item--input">
            <Input
              name="users_invoiceAddressCity"
              type="text"
              label={t('components.register.localityInputLabel')}
              maxLength={50}
              required
              validation={validator.validateCity}
              ref={(v) => { this.users_invoiceAddressCity = v; }}
              onChange={this.handleChange}
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
            ref={(v) => { this.invoiceCheckbox = v; }}
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
