import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import SignupForm from 'components/SignupForm/SignupForm';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmailExists: false,
      fireRedirect: undefined,
    };
    this.checkIsEmailExists = this.checkIsEmailExists.bind(this);
  }

  checkIsEmailExists(emailValue) {
    const { http } = this.props;
    return http.get(`/api/users/email=${emailValue}`)
      .then((res) => {
        this.setState({ isEmailExists: res });
      })
      .catch(() => this.setState({ fireRedirect: 'error' }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fireRedirect === 'error' && <Redirect to={{ pathname: '/error' }} />}
        <div className="login-form__wrapper">
          <SignupForm onSubmit={this.checkIsEmailExists} isEmailExists={this.state.isEmailExists} />
        </div>
      </React.Fragment>
    );
  }
}

export { SignUpScreen };
export default translate()(SignUpScreen);
