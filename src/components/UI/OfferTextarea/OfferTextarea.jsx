import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './OfferTextarea.css';

class OfferTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (this.state.value.trim() === '' && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.offerTextarea.errorMessage') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(e) {
    const { value } = e.target;

    if (value.length <= 500) this.setState({ value });

    this.activateNextField(value);
  }

  activateNextField(value) {
    if (this.props.name === 'add-form__offer-basic' && value.trim() !== '') {
      this.props.onOfferBasicChange();
    }
    if (this.props.name === 'add-form__offer-additional' && value.trim() !== '') {
      this.props.onOfferAdditionalChange();
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
        <div className="add-form__error-message--temporary-offerTextArea">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate('translations', { withRef: true })(OfferTextarea);
