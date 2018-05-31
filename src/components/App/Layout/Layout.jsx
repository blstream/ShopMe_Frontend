import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import Header from 'components/App/Header/Header';
import Footer from 'components/App/Footer/Footer';
import AppError from 'components/App/Error/Error';
import ForbiddenError from 'components/App/Forbidden/Forbidden';
import httpHelper from './http.helper';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      fireRedirect: false,
      forbidden: false,
    };
    this.http = {
      get: (...rest) => httpHelper.get(...rest).catch(this.displayError),
      post: (...rest) => httpHelper.post(...rest).catch(this.displayError),
    };
    this.displayError = this.displayError.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.isRequireAuthorization();
  }

  componentWillReceiveProps() {
    this.displayError(false);
    this.resetRequirements();
  }

  displayError(hasError) {
    this.setState({ hasError });
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

  isRequireAuthorization() {
    const token = localStorage.getItem('userToken');
    if (this.props.requiresAuthorization && !token) this.setState({ forbidden: true });
  }

  resetRequirements() {
    this.setState({ forbidden: false });
  }

  render() {
    const { children } = this.props;
    const childProps = {
      displayError: this.displayError,
      http: this.http,
    };
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) return React.cloneElement(child, childProps);
      return child;
    });

    let content;
    if (this.state.forbidden) {
      content = <ForbiddenError />;
    } else if (this.state.hasError) {
      content = <AppError />;
    } else {
      content = childrenWithProps;
    }

    if (this.state.fireRedirect) return <Redirect to="/" />;

    return (
      <div className="wrapper">
        <div className="content">
          <Header
            onClick={this.logout}
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
