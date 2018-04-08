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

    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;
    const pattern = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 ]*$/;

    if (this.state.value.trim() === '' && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.titleInput.errorEmptyField') });
      return false;
    } else if (this.state.value.length <= 2 && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.titleInput.errorMinLength') });
      return false;
    } else if (this.state.isRequired && !pattern.test(this.state.value)) {
      this.setState({ errorMessage: t('components.UI.titleInput.errorIllegalCharacters') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(event) {
    const { value } = event.target;
<<<<<<< HEAD
    if (value.length <= 30) this.setState({ value });
=======
    if (value.length <= 30) {
      this.setState({ value });
    }
>>>>>>> Fix bug requested by QA in TitleInput to allow at most 30 characters in add form title
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    const { t } = this.props;
    return (
      <label
        htmlFor={this.props.name}
        className="add-form_label"
      >
        {t('components.UI.titleInput.name')}
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

export default translate('translations', { withRef: true })(TitleInput);
