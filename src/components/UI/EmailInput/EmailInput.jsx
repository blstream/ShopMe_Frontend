import React, { Component } from 'react';
import { translate } from 'react-i18next';

class EmailInput extends Component {
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
      this.setState({ errorMessage: t('components.UI.EmailInput.errorEmptyField') });
      return false;
    }
    const pattern = /^\S+@\S+\.\S+$/;
    if (!pattern.test(event.target.value)) {
      this.setState({ errorMessage: t('components.UI.EmailInput.errorEmailRegex') });
    }
    return isValid;
  }

  render() {
    const { t } = this.props;
    return (
      <div className="add__container">
        <label
          className="add__label"
          htmlFor="email"
        >
          {t('components.UI.EmailInput.name')}
          <div>
            <input
              className="add__input"
              type="email"
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

export { EmailInput };
export default translate()(EmailInput);
