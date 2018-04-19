import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './TermsAndConditionsCheckbox.css';

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
    const { validation, t } = this.props;
    const errorMessage = validation(checked);

    if (errorMessage) {
      this.setState({ errorMessage: t(errorMessage) });
      return false;
    }

    this.setState({ errorMessage: '' });
    return true;
  }

  render() {
    const { t } = this.props;
    return (
      <label
        htmlFor="users__terms-and-conditions-checkbox"
        className="users__terms-and-conditions-checkbox--label"
      >
        <input
          id="users__terms-and-conditions-checkbox"
          name="users__terms-and-conditions-checkbox"
          type="checkbox"
          className="users__terms-and-conditions-checkbox--input"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        {t('components.login.register.termsAndConditions')}
        <Link
          className="users__terms-and-conditions-checkbox--link"
          href="/terms"
          to="/terms"
        >
          {t('components.login.register.termsAndConditionsLink')}
        </Link>
        <div className="users__terms-and-conditions-checkbox--error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export { TermsAndConditionsCheckbox };
export default translate('translations', { withRef: true })(TermsAndConditionsCheckbox);
