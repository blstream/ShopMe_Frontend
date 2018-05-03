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
        let getUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
        let parse = options ? options.parse : 'json';
        if (parse === 'none') parse = 'json';
        if (params) getUrl = `${getUrl}?${params.title}=${params.page}`;
        return fetch(getUrl)
          .then(response => response[parse]());
      },
      post(url, body, options) {
        const postUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
        let parse = options ? options.parse : 'json';
        if (parse === 'none') parse = 'json';
        return fetch(postUrl, {
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
          .then(response => response[parse]());
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
