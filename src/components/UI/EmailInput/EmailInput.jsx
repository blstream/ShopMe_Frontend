import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './EmailInput.css';

class EmailInput extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
  }

  checkValidity(event) {
    const { t } = this.props;
    const isValid = true;

    if (this.state.isRequired && event.target.value.trim() === '') {
      this.setState({ errorMessage: t('components.UI.emailInput.errorEmptyField') });
      return false;
    }
    const pattern = /^\S+@\S+\.\S+$/;
    if (this.state.isRequired && !pattern.test(event.target.value)) {
      this.setState({ errorMessage: t('components.UI.emailInput.errorEmailRegex') });
      return false;
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
          {t('components.UI.emailInput.name')}
        </div>
        <input
          className="add-form__input add-form__input--S add-form__input--yellow"
          type="email"
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

export { EmailInput };
export default translate()(EmailInput);
