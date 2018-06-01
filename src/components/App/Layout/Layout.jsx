import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import Header from 'components/App/Header/Header';
import Footer from 'components/App/Footer/Footer';
import AllScreenError from 'components/App/Errors/AllScreenError/AllScreenError';
import httpHelper from './http.helper';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      fireRedirect: false,
      error: '',
    };
    this.http = {
      get: (...rest) => httpHelper.get(...rest).catch(this.displayError),
      post: (...rest) => httpHelper.post(...rest).catch(this.displayError),
    };
    this.displayError = this.displayError.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps() {
    this.displayError(false);
  }

  displayError(thrownError) {
    if (thrownError) {
      this.setState({
        error: thrownError,
        hasError: true,
      });
    } else {
      this.setState({
        error: '',
        hasError: false,
      });
    }
  }

  logout() {
    this.http.post('/api/users/logout')
      .then(() => this.setState(
        { fireRedirect: true },
        () => this.setState({ fireRedirect: false })
      ));
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userSurname');
  }

  render() {
    const { children } = this.props;
    const childProps = {
      hasError: this.state.hasError,
      error: this.state.error,
      http: this.http,
    };
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) return React.cloneElement(child, childProps);
      return child;
    });

    let content;
    const token = localStorage.getItem('userToken');
    if (this.state.hasError && this.state.errorStatus >= 500) {
      content = <AllScreenError error={this.state.error} />;
    } else if (this.props.requiresAuthorization && !token) {
      content = <AllScreenError forbidden={true} message="components.forbidden.text" errorImg="nonFatalError" />;
    } else {
      content = childrenWithProps;
    }

    if (this.state.fireRedirect) return <Redirect to="/" />;

    return (
      <div className="wrapper">
        <div className="content">
          <Header
            onClick={this.logout}
            isHomepage={this.props.children.type.name === 'Home'}
            isResults={this.props.children.type.name === 'SearchScreen'}
          />
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
