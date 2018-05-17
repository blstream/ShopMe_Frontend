import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import LoginForm from 'components/Login/LoginForm/LoginForm';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFireRedirect: false,
      response: {
        userId: undefined,
        email: undefined,
        name: undefined,
        surname: undefined,
        roles: undefined,
        expirationDate: undefined,
        jwt: undefined,
        id: undefined,
        message: undefined,
      },
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.logUser = this.logUser.bind(this);
  }

  logUser(data) {
    const { http } = this.props;
    return http.post('/api/users/login', data)
      .then(response => this.setState({ response }));
  }

  handleLoginSubmit() {
    if (this.state.response.jwt) localStorage.setItem('userToken', this.state.response.jwt);
    if (this.state.response.name) localStorage.setItem('userName', this.state.response.name);
    if (this.state.response.surname) localStorage.setItem('userSurname', this.state.response.surname);
    const token = localStorage.getItem('userToken');
    const name = localStorage.getItem('userName');
    const surname = localStorage.getItem('userSurname');
    const isUserLogged = !!localStorage.getItem('userName');
    this.props.setUser(token, name, surname);
    if (isUserLogged) this.setState({ loginFireRedirect: true });
  }

  render() {
    return (
      <div className="login-form__wrapper">
        {this.state.loginFireRedirect && <Redirect to="/" />}
        <LoginForm
          handleSubmit={this.handleLoginSubmit}
          logUser={this.logUser}
        />
      </div>
    );
  }
}

export { LoginScreen };
export default translate()(LoginScreen);
