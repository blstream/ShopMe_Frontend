import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import AddForm from 'components/Add/Form/Form';
import ErrorMessage from 'components/UI/ErrorMessage/ErrorMessage';

class AddFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      responseId: '',
      error: false,
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    const { http } = this.props;
    return http.post('/api/offers', data)
      .then(response => this.setState({ responseId: response.id }))
      .then(() => this.setState({ fireRedirect: true }))
      .catch(() => this.setState({ fireRedirect: 'error' }));
  }

  render() {
    if (this.state.error) return <ErrorMessage />;
    return (
      <React.Fragment>
        {this.state.fireRedirect &&
        <Redirect
          to={{
            pathname: '/add/form/success',
            responseId: this.state.responseId,
          }}
        />}
        <AddForm fetchData={this.sendData} />
      </React.Fragment>
    );
  }
}

export { AddFormScreen };
export default translate()(AddFormScreen);
