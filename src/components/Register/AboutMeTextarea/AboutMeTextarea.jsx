import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './AboutMeTextarea.css';

class AboutMeTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value);
    }
    this.setState({ errorMessage: '' });
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    const { t } = this.props;
    return (
      <div className="about-me__inline-label">
        <label
          className="about-me__label"
          htmlFor={this.props.name}
        >
          {t('components.UI.aboutMeTextarea.name')}
        </label>
        <textarea
          className="about-me__textarea"
          name={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
          maxLength={this.props.maxLength}
        />
        <div className="add-form__error-message">
          {this.state.errorMessage}
        </div>
      </div>

    );
  }
}

export { AboutMeTextArea };
export default translate('translations', { withRef: true })(AboutMeTextArea);
