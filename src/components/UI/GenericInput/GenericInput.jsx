import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './GenericInput.css';

class GenericInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (this.props.pattern(value)) {
      this.setState({ value });
    }
  }

  checkValidity() {
    const { value } = this.state;
    const { validation, required, t } = this.props;
    const error = validation(required, value);

    if (error) {
      this.setState({ errorMessage: t(error.message) });
      return false;
    }

    this.setState({ errorMessage: '' });
    return true;
  }

  render() {
    return (
      <label
        className="input__wrapper"
        htmlFor={this.props.name}
      >
        <p className={`input__label input__label--${this.props.color}`}>
          {this.props.label}
        </p>
        <input
          className={`input  input--${this.props.size} input--${this.props.color}`}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input__error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export { GenericInput };
export default translate('translations', { withRef: true })(GenericInput);
