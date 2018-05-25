import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './AboutMeTextarea.css';

class AboutMeTextArea extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onValidate) {
      const isValid = this.checkValidity();
      this.props.doValidate(this.props.name, isValid);
      if (isValid) {
        this.props.setValue(this.props.name, this.state.value);
      }
    }
  }

  handleChange(event) {
    this.setState({ errorMessage: '' });
    if (event.target.value.length <= 800) this.setState({ value: event.target.value });
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (this.state.isRequired && this.state.value.trim() === '') {
      this.setState({ errorMessage: t('components.UI.aboutMeTextarea.errorEmptyField') });
      return false;
    }
    return isValid;
  }

  render() {
    return (
      <label htmlFor={this.props.name}>
        <textarea
          className="add-form__about-me-textarea"
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        <div className="add-form__error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export { AboutMeTextArea };
export default translate('translations', { withRef: true })(AboutMeTextArea);
