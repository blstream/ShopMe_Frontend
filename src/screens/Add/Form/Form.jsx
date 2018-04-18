import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import AddForm from 'components/Add/Form/Form';
import Layout from 'core/Layout';

class ScreensAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(url, data) {
    return fetch(url, data)
      .then(() => this.setState({ fireRedirect: true }));
  }

  render() {
    return (
      <Layout>
        {this.state.fireRedirect && <Redirect to="/add/form/success" />}
        <AddForm fetchData={this.sendData} />
      </Layout>
    );
  }
}

export { ScreensAddForm };
export default translate()(ScreensAddForm);
