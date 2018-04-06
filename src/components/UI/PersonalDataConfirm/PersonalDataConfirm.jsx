import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './PersonalDataConfirm.css';

class PersonalDataConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
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
          name="users__personal-data-processing"
          type="checkbox"
          className="users__personal-data-processing--input"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export { PersonalDataConfirm };
export default translate('translations', { withRef: true })(PersonalDataConfirm);
