import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './TitleInput.css';

class TitleInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  checkValidity(value) {
    const { t } = this.props;
    const isValid = true;

    if (value.trim() === '' && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.TitleInput.errorEmptyField') });
      return false;
    } else if (value.length <= 2) {
      this.setState({ errorMessage: t('components.UI.TitleInput.errorMinLength') });
      return false;
    } else if (value.length > 30) {
      this.setState({ errorMessage: t('components.UI.TitleInput.errorMaxLength') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    return (
      <label
        htmlFor={this.props.name}
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
