import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Header from 'components/App/Header/Header';
import Footer from 'components/App/Footer/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        token: localStorage.getItem('userToken'),
      },
    };
    this.http = {
      get(url, params, options) {
        const parseMethod = options ? options.parse : 'json';
        let getUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);

        if (params) {
          const getParams = new URLSearchParams(Object.entries(params));
          getUrl = `${getUrl}?${getParams}`;
        }

        if (parseMethod === 'none') return fetch(getUrl);

        return fetch(getUrl)
          .then(response => response[parseMethod]());
      },

      post(url, body, options) {
        const parseMethod = options ? options.parse : 'json';
        const postUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
        const myInit = {
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        };

        if (parseMethod === 'none') return fetch(postUrl, myInit);

        return fetch(postUrl, myInit)
          .then(response => response[parseMethod]());
      },
    };
    this.setUserToken = this.setUserToken.bind(this);
  }

  setUserToken(token) {
    this.setState({ user: { token } });
  }

  render() {
    const { children } = this.props;
    const childProps = {
      setUserToken: this.setUserToken,
      http: this.http,
    };
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) return React.cloneElement(child, childProps);
      return child;
    });
    return (
      <div className="wrapper">
        <div className="content">
          <Header user={this.state.user} />
          <main className={this.props.className}>
            {childrenWithProps}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Layout };
export default translate()(Layout);
