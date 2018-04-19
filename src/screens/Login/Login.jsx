import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import SignupForm from 'components/Login/SignupForm/SignupForm';
import Layout from 'core/Layout';

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
    document.cookie = 'userToken=test';
    const isUserLogged = !!document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (isUserLogged) this.setState({ loginFireRedirect: true });
  }

  render() {
    return (
      <Layout className="login-form__wrapper">
        {this.state.loginFireRedirect && (
        <Redirect to="/" />
        )}
        <LoginForm
          handleSubmit={this.handleLoginSubmit}
        />
        <SignupForm />
      </Layout>
    );
  }
}

export { ScreensLogin };
export default translate()(ScreensLogin);
