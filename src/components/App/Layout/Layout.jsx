import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Header from 'components/App/Header/Header';
import Footer from 'components/App/Footer/Footer';
import ErrorMessage from 'components/UI/ErrorMessage/ErrorMessage';
import http from './http.helper';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        token: localStorage.getItem('userToken'),
      },
      hasError: false,
    };
    this.setUserToken = this.setUserToken.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  setUserToken(token) {
    this.setState({ user: { token } });
  }

  displayError(hasError) {
    this.setState({ hasError });
  }

  render() {
    const { children } = this.props;
    const childProps = {
      setUserToken: this.setUserToken,
      displayError: this.displayError,
      http,
    };
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) return React.cloneElement(child, childProps);
      return child;
    });
    const content = this.state.hasError ? <ErrorMessage /> : childrenWithProps;
    return (
      <div className="wrapper">
        <div className="content">
          <Header user={this.state.user} />
          <main className={this.props.className}>
            {content}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Layout };
export default translate()(Layout);
