import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

class TermsAndConditionsCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      errorMessage: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked,
      errorMessage: '',
    });
  }

  checkValidity() {
    const { checked } = this.state;
    const { t } = this.props;

    if (!checked) {
      this.setState({
        errorMessage: t('components.UI.termsAndConditions.errorEmptyField'),
      });
      return false;
    }
    return true;
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="register-form__item--checkbox">
          <input
            id="users__terms-and-conditions-checkbox"
            name="users__terms-and-conditions-checkbox"
            type="checkbox"
            className="register-form__checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <label
            htmlFor="users__terms-and-conditions-checkbox"
          >
            {t('components.register.termsAndConditions')}
            <Link
              className="register__checkbox--link"
              href="/articles/conditions"
              to="/articles/conditions"
              target="_blank"
            >
              {t('components.register.termsAndConditionsLink')}
            </Link>
          </label>
        </div>
        <div className="register__checkbox--error-message">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export { TermsAndConditionsCheckbox };
export default translate('translations', { withRef: true })(TermsAndConditionsCheckbox);
