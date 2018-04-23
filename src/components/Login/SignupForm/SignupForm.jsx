import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import FormButton from 'components/UI/FormButton/FormButton';

import './SignUpForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users__name: '',
      users__surname: '',
      users__email: '',
      fireRedirect: false,
      errorMessage: false,
    };
    this.setFieldStateValue = this.setFieldStateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getInputReferences = this.getInputReferences.bind(this);
  }

  getInputReferences() {
    return [
      this.nameInput,
      this.surnameInput,
      this.emailInput,
    ];
  }

  setFieldStateValue(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const refs = this.getInputReferences();
    const isRefsValid = refs.map(ref => ref.getWrappedInstance().checkValidity());
    const emailValue = this.state.users__email;
    const isFormValid = isRefsValid.includes(false);

    this.setState({ errorMessage: isFormValid });

    if (!isRefsValid.includes(false)) {
      this.props.onSubmit(emailValue).then(() => {
        if (this.props.result === false) this.setState({ fireRedirect: true });
      });
    }
  }

  render() {
    const { t } = this.props;
    const { fireRedirect, errorMessage } = this.state;
    if (fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/register',
            state: {
              name: this.state.users__name,
              surname: this.state.users__surname,
              email: this.state.users__email,
            },
          }}
        />
      );
    }
    return (
      <React.Fragment>
        <div className="signup-form__email-exists-message">
          { this.props.result === true &&
            t('components.login.register.anEmailIsExisting') }
        </div>
        <form
          className="signup-form"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <fieldset className="signup-form__fieldset">
            <div className="signup-form__icon-container">
              <i className="signup-form__icon signup-form__icon--signup fas fa-user-plus" />
            </div>
            <h1 className="signup-form__title">{t('components.login.signup.formTitle')}</h1>
            {errorMessage && <p className="signum-form__error">{t('components.login.signup.errorMessage')}</p>}
            <div className="signup-form__item">
              <GenericInput
                name="users__name"
                type="text"
                label={t('components.login.signup.firstNameInputLabel')}
                maxLength="20"
                required
                validation={validator.validateNameInput}
                onChange={this.setFieldStateValue}
                ref={(v) => { this.nameInput = v; }}
              />
            </div>
            <div className="signup-form__item">
              <GenericInput
                name="users__surname"
                type="text"
                label={t('components.login.signup.lastNameInputLabel')}
                maxLength="50"
                required
                validation={validator.validateSurnameInput}
                onChange={this.setFieldStateValue}
                ref={(v) => { this.surnameInput = v; }}
              />
            </div>
            <div className="signup-form__item">
              <GenericInput
                name="users__email"
                type="email"
                label={t('components.login.signup.emailInputLabel')}
                required
                validation={validator.validateEmailInput}
                onChange={this.setFieldStateValue}
                ref={(v) => { this.emailInput = v; }}
              />
            </div>
            <div className="signup-form__item signup-form__item--button">
              <FormButton
                id="signup-form__submit"
                type="submit"
                value={t('components.login.signup.submitButtonLabel')}
              />
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export { SignupForm };
export default translate()(SignupForm);
