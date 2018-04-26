import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';

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
          <div className="register-form__item">
            <GenericInput
              name="users_invoiceCompanyName"
              type="text"
              label={t('components.login.register.companyNameInputLabel')}
              required
              validation={validator.validateCompanyName}
              ref={(v) => { this.users_invoiceCompanyName = v; }}
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users_invoiceNip"
              type="text"
              label={t('components.login.register.nipInputLabel')}
              maxLength="50"
              required
              validation={validator.validateTextInput}
              ref={(v) => { this.users_invoiceNip = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users_invoiceAddressStreet"
              type="text"
              label={t('components.login.register.streetInputLabel')}
              required
              validation={validator.validateStreet}
              ref={(v) => { this.users_invoiceAddressStreet = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users_invoiceAddressNumber"
              type="text"
              label={t('components.login.register.houseNumberInputLabel')}
              required
              validation={validator.validateTextInput}
              ref={(v) => { this.users_invoiceAddressNumber = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users_invoiceAddressZipCode"
              type="text"
              label={t('components.login.register.zipCodeInputLabel')}
              maxLength="50"
              required
              validation={validator.validateTextInput}
              ref={(v) => { this.users_invoiceAddressZipCode = v; }}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="users_invoiceAddressCity"
              type="text"
              label={t('components.login.register.localityInputLabel')}
              maxLength="50"
              required
              validation={validator.validateCity}
              ref={(v) => { this.users_invoiceAddressCity = v; }}
              onChange={this.handleChange}
            />
          </div>
        </div>)
      : null;

    return (
      <div>
        <label
          htmlFor="invoiceCheckbox"
          style={{ margin: '0 0 0 325px' }}
        >
          {t('components.login.register.invoiceDataLabel')}
          <input
            name="invoiceCheckbox"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            style={{ margin: '0 0 0 10px', cursor: 'pointer' }}
            ref={(v) => { this.invoiceCheckbox = v; }}
          />
        </label>
        {content}
      </div>
    );
  }
}

export { InvoiceInputGroup };
export default translate('translations', { withRef: true })(InvoiceInputGroup);
