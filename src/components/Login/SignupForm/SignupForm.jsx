import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import FormButton from 'components/UI/FormButton/FormButton';

import '../Login.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: '',
      usersSurname: '',
      usersEmail: '',
      fireRedirect: false,
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

    if (!isRefsValid.includes(false)) {
      this.setState({ fireRedirect: true });
    }
  }

  render() {
    const { t } = this.props;
    const { fireRedirect } = this.state;
    if (fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/register',
            state: {
              name: this.state.usersName,
              surname: this.state.usersSurname,
              email: this.state.usersEmail,
            },
          }}
        />
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.handleSubmit}
        noValidate
      >
        <fieldset className="login-form__fieldset">
          <div className="login-form__icon-container">
            <i className="login-form__icon login-form__icon--signup fas fa-user-plus" />
          </div>
          <h1 className="login-form__title">{t('components.login.signup.formTitle')}</h1>
          <div className="login-form__item">
            <GenericInput
              name="usersName"
              type="text"
              label={t('components.login.signup.firstNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="20"
              required
              validation={validator.validateNameInput}
              onChange={this.setFieldStateValue}
              ref={(v) => { this.nameInput = v; }}
            />
          </div>
          <div className="login-form__item">
            <GenericInput
              name="usersSurname"
              type="text"
              label={t('components.login.signup.lastNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
              validation={validator.validateSurnameInput}
              onChange={this.setFieldStateValue}
              ref={(v) => { this.surnameInput = v; }}
            />
          </div>
          <div className="login-form__item">
            <GenericInput
              name="usersEmail"
              type="email"
              label={t('components.login.signup.emailInputLabel')}
              color="yellow"
              size="M"
              required
              validation={validator.validateEmailInput}
              onChange={this.setFieldStateValue}
              ref={(v) => { this.emailInput = v; }}
            />
          </div>
          <div className="login-form__item login-form__item--button">
            <FormButton
              id="signup-form__submit"
              type="submit"
              value={t('components.login.signup.submitButtonLabel')}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { SignupForm };
export default translate()(SignupForm);
