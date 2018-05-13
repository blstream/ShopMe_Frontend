import React from 'react';
import { translate } from 'react-i18next';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import { Redirect } from 'react-router';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: undefined,
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    const { http } = this.props;
    return http.post('/api/users', data)
      .then(() => this.setState({ fireRedirect: true }))
      .catch(() => this.setState({ fireRedirect: 'error' }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fireRedirect === 'success' && <Redirect to="/register/success" />}
        {this.state.fireRedirect === 'error' && <Redirect to={{ pathname: '/error' }} />}
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
