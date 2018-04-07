import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './OfferTextarea.css';

class OfferTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  checkValidity() {
    const { t, required, disabled } = this.props;
    const isValid = true;

    if (this.state.value.trim() === '' && required && !disabled) {
      this.setState({ errorMessage: t('components.UI.offerTextarea.errorEmptyField') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(e) {
    const { value } = e.target;

    if (value.length <= 500) this.setState({ value });
    if (value.trim() !== '') this.activateNextField();
    if (value.trim() === '') this.deactivateNextFields();
  }

  activateNextField() {
    if (this.props.name === 'offer__base-description') {
      this.props.onOfferBaseChange();
    }
    if (this.props.name === 'offer__extended-description') {
      this.props.onOfferExtendedChange();
    }
    if (this.props.name === 'offer__extra-description') {
      this.props.onOfferExtraChange();
    }
  }

  deactivateNextFields() {
    if (this.props.name === 'offer__base-description') {
      this.props.onOfferBaseReset();
    }
    if (this.props.name === 'offer__extended-description') {
      this.props.onOfferExtendedReset();
    }
    if (this.props.name === 'offer__extra-description') {
      this.props.onOfferExtraReset();
    }
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <label htmlFor="this.props.name" className="add-form__label">
        <div>{this.props.label}</div>
        <textarea
          className={this.props.disabled
            ? 'add-form__input add-form__input--XL add-form__input--disabled'
            : 'add-form__input add-form__input--XL'
          }
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

export default translate('translations', { withRef: true })(OfferTextarea);
