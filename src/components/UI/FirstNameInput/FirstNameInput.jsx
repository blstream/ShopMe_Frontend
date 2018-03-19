import React, { Component } from 'react';
import { translate } from 'react-i18next';

class FirstNameInput extends Component {
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
      this.setState({ errorMessage: t('components.UI.AddForm.NameInput.errorEmptyField') });
      return false;
    }
    if (event.target.value.length > 20) {
      this.setState({ errorMessage: t('components.UI.AddForm.NameInput.errorMaxLength') });
    }
    if (event.target.value.length < 3) {
      this.setState({ errorMessage: t('components.UI.AddForm.NameInput.errorMinLength') });
    }
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(event.target.value)) {
      this.setState({ errorMessage: t('components.UI.AddForm.NameInput.errorOnlyAlpha') });
    }
    return isValid;
  }

  render() {
    const { t } = this.props;
    return (
      <div className="add__container">
        <label
          className="add__label"
          htmlFor="name"
        >
          {t('components.UI.FirstNameInput.name')}
          <div>
            <input
              className="add__input"
              type="text"
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

export { FirstNameInput };
export default translate()(FirstNameInput);
