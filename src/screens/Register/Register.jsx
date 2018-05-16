import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    const { http } = this.props;
    return http.post('/api/users', data)
      .then(() => this.setState({ fireRedirect: true }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fireRedirect && <Redirect to="/register/success" />}
        <RegisterForm
          location={this.props.location}
          fetchData={this.sendData}
          fireRedirect={this.state.fireRedirect}
        />
      </React.Fragment>
    );
  }
}

export { RegisterScreen };
export default translate()(RegisterScreen);
