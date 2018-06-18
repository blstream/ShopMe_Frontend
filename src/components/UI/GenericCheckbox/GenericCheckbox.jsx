import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import './GenericCheckbox.css';

class GenericCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      errorMessage: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this.resetInput = this.resetInput.bind(this);
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
    const value = event.target.checked;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value);
    }
    this.setState({ errorMessage: '' });
  }

  checkValidity() {
    const { value } = this.state;
    const { validation, t } = this.props;
    const errorMessage = validation(value);

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
      <div>
        <div className={this.props.wrapperName}>
          <input
            name={this.props.name}
            id={this.props.name}
            type="checkbox"
            className="register-form__checkbox"
            checked={this.state.value}
            onChange={this.handleChange}
          />
          <label
            htmlFor={this.props.name}
          >
            {this.props.label}
            {this.props.children}
          </label>
        </div>
        <div className="register__checkbox--error-message">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

GenericCheckbox.defaultProps = {
  validation() { return undefined; },
  onChange() {},
  value: false,
};

GenericCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validation: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export { GenericCheckbox };
export default translate('translations', { withRef: true })(GenericCheckbox);
