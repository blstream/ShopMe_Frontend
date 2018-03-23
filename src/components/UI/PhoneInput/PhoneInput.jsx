import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PhoneInput.css';

class PhoneInput extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.isRequired,
    };
  }

  checkValidity(event) {
    const { t } = this.props;
    const isValid = true;

    if (this.state.isRequired === 'true') {
      if (event.target.value.trim() === '') {
        this.setState({ errorMessage: t('components.UI.phoneInput.errorEmptyField') });
        return false;
      }
      const pattern = /^\d{8,9}[0-9]$/;
      if (!pattern.test(event.target.value)) {
        this.setState({ errorMessage: t('components.UI.phoneInput.errorPhoneRegex') });
        return false;
      }
    }
    return isValid;
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
          onChange={event => this.setState({ value: event.target.value, errorMessage: '' })}
        />
        <div className="add-form__error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export { PhoneInput };
export default translate()(PhoneInput);
