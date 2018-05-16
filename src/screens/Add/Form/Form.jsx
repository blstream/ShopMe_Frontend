import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import AddForm from 'components/Add/Form/Form';

class AddFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      responseId: '',
      categories: [],
      voivodeships: [],
    };
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    const { http } = this.props;
    Promise.all([http.get('/api/categories'), http.get('/api/voivodeships')])
      .then(res => this.setState({ categories: res[0], voivodeships: res[1] }));
  }

  sendData(data) {
    const { http } = this.props;
    return http.post('/api/offers', data)
      .then(response => this.setState({ responseId: response.id }))
      .then(() => this.setState({ fireRedirect: true }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fireRedirect &&
        <Redirect
          to={{
            pathname: '/add/form/success',
            responseId: this.state.responseId,
          }}
        />}
        <AddForm
          fetchData={this.sendData}
          categories={this.state.categories}
          voivodeships={this.state.voivodeships}
        />
      </React.Fragment>
    );
  }
}

export { AddFormScreen };
export default translate()(AddFormScreen);
