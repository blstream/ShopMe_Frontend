import React, { Component } from 'react';
import { translate } from 'react-i18next';

class PhoneInput extends Component {
  constructor(props) {
    super(props);

    this.checkValidity = this.checkValidity.bind(this);

    this.state = {
      value: '',
      errorMessage: '',
    };
  }

  checkValidity(event) {
    const { t } = this.props;
    const isValid = true;

    if (event.target.value.trim() === '') {
      this.setState({ errorMessage: t('components.UI.PhoneInput.errorEmptyField') });
      return false;
    }
    const pattern = /^\S+@\S+\.\S+$/;
    if (!pattern.test(event.target.value)) {
      this.setState({ errorMessage: t('components.UI.PhoneInput.errorEmailRegex') });
    }
    return isValid;
  }

  render() {
    const { t } = this.props;
    return (
      <div className="add__container">
        <label
          className="add__label"
          htmlFor="phone-number"
        >
          {t('components.UI.PhoneInput.name')}
          <div>
            <input
              className="add__input"
              type="number"
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

export { PhoneInput };
export default translate()(PhoneInput);
