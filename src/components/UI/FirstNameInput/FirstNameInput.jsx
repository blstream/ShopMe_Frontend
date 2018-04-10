import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './FirstNameInput.css';

class FirstNameInput extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
  }

  handleChange(event) {
    this.setState({ errorMessage: '' });
    if (event.target.value.length <= 20) this.setState({ value: event.target.value });
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (this.state.isRequired && this.state.value.trim() === '') {
      this.setState({ errorMessage: t('components.UI.firstNameInput.errorEmptyField') });
      return false;
    }
    if (this.state.isRequired && this.state.value.length < 3) {
      this.setState({ errorMessage: t('components.UI.firstNameInput.errorMinLength') });
      return false;
    }
    const pattern = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/;
    if (this.state.isRequired && !pattern.test(this.state.value)) {
      this.setState({ errorMessage: t('components.UI.firstNameInput.errorOnlyAlpha') });
      return false;
    }
    return isValid;
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
          {t('components.UI.firstNameInput.name')}
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

export { FirstNameInput };
export default translate('translations', { withRef: true })(FirstNameInput);
