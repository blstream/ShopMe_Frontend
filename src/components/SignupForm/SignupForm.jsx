import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';
import FormButton from 'components/UI/FormButton/FormButton';
import NonFatalError from 'components/App/Errors/NonFatalError/NonFatalError';
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
    this.props.onSubmit(this.state.inputsValue.userEmail).then(() => {
      if (this.props.isEmailExists === false) this.setState({ fireRedirect: true });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ doValidate: true });
  }

  render() {
    const { t, isEmailExists } = this.props;
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
      <form
        className="signup-form"
        onSubmit={this.handleSubmit}
        noValidate
      >
        {isEmailExists && <NonFatalError message="endpointError.users.get.email" />}
        <div className="signup-form__errors">
          {errorMessage && <p className="signup-form__error">{t('components.signup.errorMessage')}</p>}
        </div>
        <h1 className="signup-form__title">{t('components.signup.formTitle')}</h1>
        <div className="signup-form__item login-form__item--input">
          <Input
            name="userName"
            type="text"
            label={t('components.signup.firstNameInputLabel')}
            maxLength={20}
            required
            validation={validator.validateNameInput}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="signup-form__item login-form__item--input">
          <Input
            name="userSurname"
            type="text"
            label={t('components.signup.lastNameInputLabel')}
            maxLength={50}
            required
            validation={validator.validateSurnameInput}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="signup-form__item login-form__item--input">
          <Input
            name="userEmail"
            type="email"
            label={t('components.signup.emailInputLabel')}
            required
            validation={validator.validateEmailInput}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="signup-form__item signup-form__item--button">
          <FormButton
            id="signup-form__submit"
            type="submit"
            value={t('components.signup.submitButtonLabel')}
          />
        </div>
        <div className="signup-form__login-link-container">
          {t('components.signup.loginMessage')}<br />
          <Link href="/login" to="/login" className="signup-form__login-link">{t('components.signup.loginLink')}</Link>
        </div>
      </form>
    );
  }
}

export { SignupForm };
export default translate()(SignupForm);
