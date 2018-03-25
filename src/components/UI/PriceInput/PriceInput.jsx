import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PriceInput.css';

class PriceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  checkValidity(value) {
    const { t } = this.props;
    const isValid = true;

    if (value.trim() === '' && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.PriceInput.errorMessage') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(e) {
    const { value } = e.target;
    const price = /^([0-9]*)(,)?([0-9]{0,2})?$/;

    if (price.test(value)) this.setState({ value });
  }

  handleKeyUp(e) {
    let { value } = e.target;
    const onlyComma = /^,/;

    if (onlyComma.test(value)) value = '0,';

    this.setState({ value });
  }

  handleFocus(e) {
    const state = this.state.value;

    if (state) {
      const noCurrency = state.substr(0, state.length - 3);
      e.target.value = noCurrency;
    }
  }

  handleBlur(e) {
    let { value } = e.target;
    const state = this.state.value;
    const currency = /zł$/;

    if (state) value = parseFloat(value.replace(',', '.')).toFixed(2).replace('.', ',');
    if (state && !currency.test(value)) value += ' zł';
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
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleBlur}
        />
        <div className="add-form__error-message">{this.state.errorMessage}</div>
      </label>
    );
  }
}

export default translate()(PriceInput);
