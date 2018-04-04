import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';

class InvoiceInputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.validator = new Validator();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
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
              name="register__company-name"
              type="text"
              label={t('components.login.register.companyNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateCompanyName}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="register__company-nip"
              type="text"
              label={t('components.login.register.nipInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateCompanyNip}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="register__company-street"
              type="text"
              label={t('components.login.register.streetInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateCompanyStreet}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="register__company-house-number"
              type="text"
              label={t('components.login.register.houseNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateCompanyHouseNumber}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="register__company-zip-code"
              type="text"
              label={t('components.login.register.zipCodeInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateCompanyZipCode}
            />
          </div>
          <div className="register-form__item">
            <GenericInput
              name="register__company-locality"
              type="text"
              label={t('components.login.register.localityInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={this.validator.validateCompanyLocality}
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
          Dane do faktury
          <input
            name="invoiceCheckbox"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
            style={{ margin: '0 0 0 10px', cursor: 'pointer' }}
          />
        </label>
        {content}
      </div>
    );
  }
}

export { InvoiceInputGroup };
export default translate('translations', { withRef: true })(InvoiceInputGroup);
