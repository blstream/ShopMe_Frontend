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
      fireRedirect: false,
      errorMessage: false,
      doValidate: undefined,
      isFormValid: undefined,
      inputsValue: {
        userName: undefined,
        userSurname: undefined,
        userEmail: undefined,
      },
      inputsValidationResult: {
        userName: undefined,
        userSurname: undefined,
        userEmail: undefined,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setFormState = this.setFormState.bind(this);
    this.isEmailExists = this.isEmailExists.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isFormValid) {
      this.isEmailExists();
    }
  }

  setFormState(obj, key, val, callback) {
    this.setState(prevState => ({
      ...prevState,
      doValidate: undefined,
      [obj]: {
        ...prevState[obj],
        [key]: val,
      },
    }), callback);
  }

  setIsValid(name, val) {
    this.setFormState('inputsValidationResult', name, val, this.checkIsFormValid);
  }

  setValue(name, val) {
    this.setFormState('inputsValue', name, val);
  }

  checkIsFormValid() {
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const isFormIncludesErrors = Object.values(inputsValidationResult).includes(false);

    this.setState({ errorMessage: isFormIncludesErrors, isFormValid: !isFormIncludesErrors });
  }

  isEmailExists() {
    this.setState({ isFormValid: undefined });
    this.props.onSubmit(this.state.userEmail).then(() => {
      if (this.props.result === false) this.setState({ fireRedirect: true });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ doValidate: true });
  }

  render() {
    const { t, result } = this.props;
    const { fireRedirect, errorMessage } = this.state;
    if (fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/register',
            state: {
              name: this.state.inputsValue.userName,
              surname: this.state.inputsValue.userSurname,
              email: this.state.inputsValue.userEmail,
            },
          }}
        />
      );
    }
    return (
      <React.Fragment>
        <form
          className="signup-form"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <fieldset className="signup-form__fieldset">
            <div className="signup-form__icon-container">
              <i className="signup-form__icon signup-form__icon--signup fas fa-user-plus" aria-hidden="true" />
            </div>
            <h1 className="signup-form__title">{t('components.login.signup.formTitle')}</h1>
            {result && <p className="signup-form__email-exists-message">{t('components.login.register.anEmailIsExisting')}</p>}
            {errorMessage && <p className="signup-form__error">{t('components.login.signup.errorMessage')}</p>}
            <div className="signup-form__item">
              <GenericInput
                name="userName"
                type="text"
                label={t('components.login.signup.firstNameInputLabel')}
                maxLength={20}
                required
                validation={validator.validateNameInput}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="signup-form__item">
              <GenericInput
                name="userSurname"
                type="text"
                label={t('components.login.signup.lastNameInputLabel')}
                maxLength={50}
                required
                validation={validator.validateSurnameInput}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="signup-form__item">
              <GenericInput
                name="userEmail"
                type="email"
                label={t('components.login.signup.emailInputLabel')}
                required
                validation={validator.validateEmailInput}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="signup-form__item">
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
