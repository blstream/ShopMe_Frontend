import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PersonalDataConfirm.css';

class PersonalDataConfirm extends Component {
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
        htmlFor="users__personal-data-processing"
        className="users__personal-data-processing--label"
      >
        {t('components.login.register.personalDataProcessing')}
        <input
          id="users__personal-data-processing"
          name="users__personal-data-processing"
          type="checkbox"
          className="users__personal-data-processing--input"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <div className="users__personal-data-processing-error-message">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export { PersonalDataConfirm };
export default translate('translations', { withRef: true })(PersonalDataConfirm);
