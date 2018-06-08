import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      errorMessage: '',
      type: this.props.type,
      eyeState: 'show',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onValidate) {
      const isValid = this.checkValidity();
      this.props.doValidate(this.props.name, isValid);
      if (isValid) {
        this.props.setValue(this.props.name, this.state.value);
      }
    }
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

  handleMouseEnter() {
    if (this.state.type === 'password') this.setState({ type: 'text', eyeState: 'hide' });
  }

  handleMouseLeave() {
    if (this.state.type === 'text') this.setState({ type: 'password', eyeState: 'show' });
  }

  render() {
    return (
      <div className={this.props.wrapperName}>
        <label
          className="generic-input__label"
          htmlFor={this.props.name}
        >
          {this.props.label}
        </label>
        <input
          className="generic-input"
          type={this.state.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          value={this.state.value}
          onChange={this.handleChange}
          required={this.props.required}
          disabled={this.props.disabled}
        />
        <div className={this.props.errorClassName}>
          {this.state.errorMessage}
        </div>
        {this.props.type === 'password' &&
        <div className="generic-input__eye-icon" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <img src={`/assets/images/generic-input/eye_${this.state.eyeState}.png`} alt="" className="generic-input__eye-img" />
        </div>}
      </div>
    );
  }
}

Input.defaultProps = {
  wrapperName: 'generic-input__inline-label',
  errorClassName: 'generic-input__error-message',
  type: 'text',
  placeholder: '',
  maxLength: 50,
  required: false,
  disabled: false,
  validation() { return undefined; },
  onChange() {},
  value: '',
};

Input.propTypes = {
  wrapperName: PropTypes.string,
  errorClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  validation: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export { Input };
export default translate('translations', { withRef: true })(Input);
