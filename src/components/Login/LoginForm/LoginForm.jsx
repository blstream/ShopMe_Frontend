import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import validator from 'helpers/validator';
import Input from 'components/UI/Input/Input';
import FormButton from 'components/UI/FormButton/FormButton';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doValidate: undefined,
      isFormValid: undefined,
      inputsValue: {
        userEmail: undefined,
        userPassword: undefined,
      },
      inputsValidationResult: {
        userEmail: undefined,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setFormState = this.setFormState.bind(this);
    this.logInUser = this.logInUser.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isFormValid) {
      this.logInUser();
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
    this.setState({ isFormValid: !isFormIncludesErrors });
  }

  logInUser() {
    this.setState({ isFormValid: undefined });
    this.props.logUser({
      email: this.state.inputsValue.userEmail,
      password: this.state.inputsValue.userPassword,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ doValidate: true });
  }

  render() {
    const { t } = this.props;
    return (
      <form
        className={`login-form login-form--error${this.props.hasError}`}
        onSubmit={this.handleSubmit}
        noValidate
      >
        <h1 className="login-form__title">{t('components.login.formTitle')}</h1>
        <div className="login-form__item login-form__item--input">
          <Input
            name="userEmail"
            type="email"
            label={t('components.login.emailInputLabel')}
            required
            validation={validator.validateEmailInput}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="login-form__item login-form__item--input">
          <Input
            name="userPassword"
            type="password"
            maxLength={30}
            label={t('components.login.passwordInputLabel')}
            required
            validation={validator.validateTextInput}
            onValidate={this.state.doValidate}
            doValidate={this.setIsValid}
            setValue={this.setValue}
          />
        </div>
        <div className="login-form__item login-form__item--button">
          <FormButton
            id="login-form__submit-form"
            type="submit"
            value={t('components.login.submitButtonLabel')}
          />
        </div>
        <div className="login-form__register-link-container">
          {t('components.login.registerMessage')}<br />
          <Link href="/signup" to="/signup" className="login-form__register-link">{t('components.login.registerLink')}</Link>
        </div>
      </form>
    );
  }
}

export { LoginForm };
export default translate()(LoginForm);
