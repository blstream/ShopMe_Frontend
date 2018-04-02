import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './TextInput.css';

class TextInput extends Component {
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
    const { t } = this.props;

    if (this.state.value.trim() === '' && this.props.required) {
      this.setState({ errorMessage: t('components.UI.titleInput.errorEmptyField') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return true;
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <label
        htmlFor={this.props.name}
        className="text-input__wrapper"
      >
        <p className="text-input_label">
          {this.props.label}
        </p>
        <input
          className="text-input"
          type={this.props.type}
          name={this.props.name}
          value={this.state.value}
          required={this.props.required}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onBlur={this.checkValidity}
        />
        <div className="text-input__errorMessage">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate('translations', { withRef: true })(TextInput);
