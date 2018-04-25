import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';

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
      <div>
        { this.state.fireRedirect && <Redirect to={{ pathname: '/' }} />}
        <SuccessMessage />
      </div>
    );
  }
}

export { ScreenSuccessAdd };
export default translate()(ScreenSuccessAdd);
