import React, { Component } from 'react';
import { translate } from 'react-i18next';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.onValidate) {
      const isValid = this.checkValidity();
      this.props.doValidate(this.props.name, isValid);
    }
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
      <div>
        <div className="register-form__item--checkbox">
          <input
            id="users__personal-data-processing"
            name={this.props.name}
            type="checkbox"
            className="register-form__checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <label
            htmlFor="users__personal-data-processing"
          >
            {t('components.register.personalDataProcessing')}
          </label>
        </div>
        <div className="register__checkbox--error-message">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export { PersonalDataConfirm };
export default translate('translations', { withRef: true })(PersonalDataConfirm);
