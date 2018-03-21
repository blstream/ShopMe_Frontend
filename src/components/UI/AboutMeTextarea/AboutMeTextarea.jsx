import React, { Component } from 'react';
import { translate } from 'react-i18next';

class AboutMeTextArea extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.isRequired,
    };
  }

  checkValidity(event) {
    const { t } = this.props;
    const isValid = true;

    if (this.state.isRequired === 'true') {
      if (event.target.value.trim() === '') {
        this.setState({ errorMessage: t('components.UI.AboutMeTextarea.errorEmptyField') });
        return false;
      }
      if (event.target.value.length > 800) {
        this.setState({ errorMessage: t('components.UI.AboutMeTextarea.errorMaxLength') });
        return false;
      }
    }
    return isValid;
  }

  render() {
    const { t } = this.props;
    return (
      <div className="add__container">
        <label
          className="add__label"
          htmlFor="aboutMe"
        >
          {t('components.UI.AboutMeTextarea.name')}
          <div>
            <textarea
              className="add__textarea"
              name={this.props.name}
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value, errorMessage: '' })}
              onBlur={this.checkValidity}
            />
          </div>
        </label>
        <div className="add__errorMessage">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export { AboutMeTextArea };
export default translate()(AboutMeTextArea);
