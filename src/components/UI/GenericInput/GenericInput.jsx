import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './GenericInput.css';

class GenericInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value);
    }
    this.setState({ errorMessage: '' });
  }

  checkValidity() {
    const { value } = this.state;
    const { validation, required, t } = this.props;
    const errorMessage = validation(required, value);

    if (errorMessage) {
      this.setState({ errorMessage: t(errorMessage) });
      return false;
    }

    this.setState({ errorMessage: '' });
    return true;
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <label
        className={this.props.labelClassName}
        htmlFor={this.props.name}
      >
        <span className={this.props.spanClassName}>
          {this.props.label}
        </span>
        <input
          className={this.props.disabled
            ? `${this.props.inputClassName} ${this.props.inputClassNameDisabled}`
            : `${this.props.inputClassName}`
          }
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          max={this.props.max}
          disabled={this.props.disabled}
          required={this.props.required}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={this.props.errorClassName}>
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

GenericInput.defaultProps = {
  maxLength: 524288,
  labelClassName: 'input__wrapper',
  spanClassName: 'input__label--M',
  inputClassName: 'input input--M input--yellow',
  errorClassName: 'input__error-message',
};

export { GenericInput };
export default translate('translations', { withRef: true })(GenericInput);
