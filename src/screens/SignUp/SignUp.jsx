import React from 'react';
import { translate } from 'react-i18next';
import SignupForm from 'components/SignupForm/SignupForm';
import PartialScreenError from 'components/App/Errors/PartialScreenError/PartialScreenError';

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
      <React.Fragment>
        {this.state.isEmailExists && <PartialScreenError message="endpointError.users.get.email" />}
        <SignupForm onSubmit={this.checkIsEmailExists} isEmailExists={this.state.isEmailExists} />
      </React.Fragment>
    );
  }
}

export { SignUpScreen };
export default translate()(SignUpScreen);
