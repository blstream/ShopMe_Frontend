import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PriceInput.css';

class PriceInput extends Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.state = {
      value: '',
      errorMessage: this.props.required ? t('components.UI.PriceInput.errorMessage') : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput() {
    const { required, t } = this.props;
    const state = this.state.value;
    const empty = state === '';
    if (required && empty) this.setState({ errorMessage: t('components.UI.PriceInput.errorMessage') });
    else this.setState({ errorMessage: '' });
  }

  handleChange(e) {
    const { value } = e.target;
    const price = /^([0-9]*)([,])?([0-9]{0,2})?$/;
    if (price.test(value)) this.setState({ value });
    this.validateInput();
  }

  handleKeyUp(e) {
    let { value } = e.target;
    const onlyComma = /^,/;
    if (onlyComma.test(value)) value = '0,';
    this.setState({ value });
    this.validateInput();
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
    return (
      <div>
        <input
          className="input"
          type="text"
          value={this.state.value}
          placeholder={this.props.placeholder}
          name={this.props.name}
          required={this.props.required}
          disabled={this.props.disabled}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleBlur}
        />
        <div className="input__errorMessage">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export default translate()(PriceInput);
