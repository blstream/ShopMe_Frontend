import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import NonFatalError from 'components/App/Errors/NonFatalError/NonFatalError';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFireRedirect: false,
    };
    this.logUser = this.logUser.bind(this);
  }

  setUser(response) {
    if (response.jwt) localStorage.setItem('userToken', response.jwt);
    if (response.name) localStorage.setItem('userName', response.name);
    if (response.surname) localStorage.setItem('userSurname', response.surname);
    const isUserLogged = !!localStorage.getItem('userName');
    if (isUserLogged) this.setState({ loginFireRedirect: true });
  }

  logUser(data) {
    const { http } = this.props;
    return http.post('/api/users/login', data)
      .then((response) => {
        if (response) this.setUser(response);
      });
  }

  render() {
    return (
      <div className="login-form__wrapper">
        {this.props.hasError && <NonFatalError error={this.props.error} />}
        {this.state.loginFireRedirect && <Redirect to="/" />}
        <LoginForm
          logUser={this.logUser}
        />
      </div>
    );
  }
}

export { LoginScreen };
export default translate()(LoginScreen);
