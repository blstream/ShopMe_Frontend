import React from 'react';
import { translate } from 'react-i18next';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';
import Layout from 'core/Layout';

class SreensLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {
        emailExist: false,
      },
    };

    this.isEmailExists = this.isEmailExists.bind(this);
  }

  isEmailExists(emailValue) {
    const url = `${process.env.REACT_APP_API}/users/email=${emailValue}`;

    return fetch(url)
      .then(res => res.json())
      .then((res) => {
        if (res === true) this.setState({ result: { emailExist: true } });
        else this.setState({ result: { emailExist: false } });
      });
  }

  render() {
    return (
      <Layout className="login-form__wrapper">
        <LoginForm />
        <SignupForm onSubmit={this.isEmailExists} result={this.state.result.emailExist} />
      </Layout>
    );
  }
}

export { SreensLogin };
export default translate()(SreensLogin);
