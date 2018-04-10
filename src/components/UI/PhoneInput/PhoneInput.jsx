import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PhoneInput.css';

class PhoneInput extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (this.state.isRequired && this.state.value.trim() === '') {
      this.setState({ errorMessage: t('components.UI.phoneInput.errorEmptyField') });
      return false;
    }
    const patternOnlyNumeric = /^[0-9]*$/;
    if (this.state.isRequired && !patternOnlyNumeric.test(this.state.value)) {
      this.setState({ errorMessage: t('components.UI.phoneInput.errorOnlyNumeric') });
      return false;
    }
    if (this.state.isRequired && this.state.value.length < 9) {
      this.setState({ errorMessage: t('components.UI.phoneInput.errorPhoneRegex') });
      return false;
    }
    return isValid;
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ errorMessage: '' });
    if (value.length <= 9) {
      this.setState({ value });
    }
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    const { t } = this.props;
    return (
      <label
        className="add-form__label add-form__label--yellow"
        htmlFor={this.props.name}
      >
        <div>
          {t('components.UI.phoneInput.name')}
        </div>
        <input
          className="add-form__input add-form__input--S add-form__input--yellow"
          type="text"
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="add-form__error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export { PhoneInput };
export default translate('translations', { withRef: true })(PhoneInput);
