import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PriceInput.css';

class PriceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onValidate) {
      this.props.doValidate(this.props.name, this.state.value, this.checkValidity());
    }
  }

  checkValidity() {
    const { required, disabled, t } = this.props;
    const isValid = true;

    if (this.state.value.trim() === '' && required && !disabled) {
      this.setState({ errorMessage: t('components.UI.priceInput.errorEmptyField') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(e) {
    const { value } = e.target;
    const price = /^([0-9]*)(,)?([0-9]{0,2})?$/;

    if (price.test(value)) this.setState({ value });
    if (value.trim() !== '') this.activateNextField();
    if (value.trim() === '') this.deactivateNextFields();
  }

  activateNextField() {
    if (this.props.name === 'offerExtendedPrice') {
      this.props.onChange('offerExtendedRequired', true);
    }
    if (this.props.name === 'offerExtraPrice') {
      this.props.onChange('offerExtraRequired', true);
    }
  }

  deactivateNextFields() {
    if (this.props.name === 'offerExtendedPrice') {
      this.props.onChange('offerExtendedRequired', false);
    }
    if (this.props.name === 'offerExtraPrice') {
      this.props.onChange('offerExtraRequired', false);
    }
  }

  handleKeyUp(e) {
    let { value } = e.target;
    const onlyComma = /^,/;

    if (onlyComma.test(value)) value = '0,';

    this.setState({ value });
  }

  handleBlur(e) {
    let { value } = e.target;
    const state = this.state.value;

    if (state) value = parseFloat(value.replace(',', '.')).toFixed(2).replace('.', ',');
    this.setState({ value });
  }

  render() {
    const { t } = this.props;
    return (
      <label htmlFor={this.props.name} className="add-form__label">
        <div className="add-form__label--hidden">{t('components.UI.PriceInput.label')}</div>
        <input
          type="text"
          className={this.props.disabled
            ? 'add-form__input add-form__input--XS add-form__input--disabled'
            : 'add-form__input add-form__input--XS'
          }
          name={this.props.name}
          value={this.state.value}
          disabled={this.props.disabled}
          required={this.props.required}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleBlur}
        />
        <div className="add-form__error-message">{this.state.errorMessage}</div>
        <div className="add-form__input-currency">{t('components.UI.priceInput.currency')}</div>
      </label>
    );
  }
}

export { PriceInput };
export default translate('translations', { withRef: true })(PriceInput);
