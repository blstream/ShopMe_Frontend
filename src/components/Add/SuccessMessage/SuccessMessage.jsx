import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';

import './SuccessMessage.css';

class SuccessMessage extends Component {
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
    const { t } = this.props;
    const { fireRedirect } = this.state;
    return (
      <React.Fragment>
        <section className="success-message__main-wrapper">
          <div className="success-message__text-wrapper">
            <h1 className="success-message__text success-message__text--green">{t('components.add.successMessage.text')}</h1>
          </div>
        </section>
        {fireRedirect && (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
      )}
      </React.Fragment>
    );
  }
}

export { SuccessMessage };
export default translate()(SuccessMessage);
