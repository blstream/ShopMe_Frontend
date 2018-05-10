import React from 'react';
import { translate } from 'react-i18next';
import SignupForm from 'components/Login/SignupForm/SignupForm';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmailExists: false,
    };
    this.checkIsEmailExists = this.checkIsEmailExists.bind(this);
  }

  checkIsEmailExists(emailValue) {
    const { http } = this.props;
    return http.get(`/api/users/email=${emailValue}`)
      .then((res) => {
        this.setState({ isEmailExists: res });
      });
  }

  render() {
    return (
      <div className="login-form__wrapper">
        <SignupForm onSubmit={this.checkIsEmailExists} isEmailExists={this.state.isEmailExists} />
      </div>
    );
  }
}

export { SignUpScreen };
export default translate()(SignUpScreen);
