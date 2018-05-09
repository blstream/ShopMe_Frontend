import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';

class ScreensLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {
        emailExist: false,
      },
      loginFireRedirect: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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

  handleLoginSubmit(e) {
    e.preventDefault();
    localStorage.setItem('userToken', 'test');
    const user = localStorage.getItem('userToken');
    const isUserLogged = !!localStorage.getItem('userToken');
    this.props.setUserToken(user);
    if (isUserLogged) this.setState({ loginFireRedirect: true });
  }

  render() {
    return (
      <div className="login-form__wrapper">
        {this.state.loginFireRedirect && <Redirect to="/" />}
        <LoginForm handleSubmit={this.handleLoginSubmit} />
        <SignupForm onSubmit={this.isEmailExists} result={this.state.result.emailExist} />
      </div>
    );
  }
}

export { ScreensLogin };
export default translate()(ScreensLogin);
