import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './OfferInput.css';

class OfferInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkValidity(value) {
    const { t } = this.props;
    const isValid = true;

    if (value.trim() === '' && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.OfferInput.errorMessage') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(e) {
    const { value } = e.target;
    if (value.length <= 500) this.setState({ value });
  }

  render() {
    return (
      <label htmlFor="this.props.name" className="add-form__label">
        <div>{this.props.label}</div>
        <textarea
          className="add-form__input add-form__input--XL"
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          onChange={this.handleChange}
        />
        <div className="add-form__error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate()(OfferInput);
