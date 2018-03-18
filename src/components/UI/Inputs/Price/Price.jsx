import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './Price.css';

class InputPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: this.props.name,
      errorMessage: this.props.required ? 'Pole wymagane' : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.returnValues = this.returnValues.bind(this);
  }

  validateInput() {
    const { required } = this.props;
    const state = this.state.value;
    const empty = state === '';
    if (required && empty) this.setState({ errorMessage: 'Pole wymagane!' });
    else this.setState({ errorMessage: '' });
  }

  handleChange(e) {
    const { value } = e.target;
    const price = /^([0-9]*)(,)?([0-9]{0,2})?$/;
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
    const oneLastDigit = /(,){1}([0-9]){1}$/;
    const lastComma = /,$/;
    const comma = /(,){1,}/;
    const currency = /zł$/;
    if (oneLastDigit.test(value)) value += '0';
    if (lastComma.test(value)) value += '00';
    if (state && !comma.test(value)) value += ',00';
    if (state && !currency.test(value)) value += ' zł';
    this.setState({ value });
    this.returnValues();
  }

  returnValues() {
    const { value, name, errorMessage } = this.state;
    const returnValues = { value, name, errorMessage };
    return returnValues;
    // this.props.onBlur(this.state);
    // this.props.onBlur(returnValues);
  }

  render() {
    return (
      <input
        className="input-price"
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
    );
  }
}

export default translate()(InputPrice);
