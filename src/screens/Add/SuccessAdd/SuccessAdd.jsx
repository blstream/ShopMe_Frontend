import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';
import Layout from 'core/Layout';

class ScreenSuccessAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    setTimeout(this.handleRedirect, 3000);
  }

  handleRedirect() {
    this.setState({ fireRedirect: true });
  }

  render() {
    return (
      <Layout>
        { this.state.fireRedirect && <Redirect to={{ pathname: '/' }} />}
        <SuccessMessage />
      </Layout>
    );
  }
}

export { ScreenSuccessAdd };
export default translate()(ScreenSuccessAdd);
