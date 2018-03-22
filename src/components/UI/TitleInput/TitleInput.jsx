import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './TitleInput.css';

class TitleInput extends Component {
  constructor(props) {
    super(props);

    const { t } = this.props;

    this.state = {
      value: '',
      errorMessage: this.props.required ? t('components.UI.TitleInput.errorEmptyField') : '',
      isRequired: this.props.required,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  validation(value) {
    const { t } = this.props;

    if ((value.trim() === '') || (value.length <= 2)) {
      this.setState({ errorMessage: t('components.UI.TitleInput.errorEmptyField') });
    }
    if ((value.length > 2) && (value.length < 25)) {
      this.setState({ errorMessage: '' });
    }
    if (value.length >= 25) {
      this.setState({ errorMessage: t('components.UI.TitleInput.warningMaxLength') });
    }
  }

  handleChange(event) {
    const { value } = event.target;
    if (this.state.isRequired) this.validation(value);
    if (value.length <= 30) this.setState({ value });
  }

  render() {
    return (
      <label
        htmlFor="this.props.name"
      >
        <input
          className="input-title"
          type="text"
          name={this.props.name}
          value={this.state.value}
          required={this.props.required}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        <div className="input-title__errorMessage">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate()(TitleInput);
