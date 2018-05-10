import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import LoginForm from 'components/Login/LoginForm/LoginForm';

class ScreensLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginFireRedirect: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
      </div>
    );
  }
}

export { ScreensLogin };
export default translate()(ScreensLogin);
