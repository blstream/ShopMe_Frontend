import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Header from 'components/App/Header/Header';
import Footer from 'components/App/Footer/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userToken: undefined,
      },
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(token) {
    this.setState({ user: { userToken: token } });
  }

  render() {
    const { children } = this.props;
    const childProps = {
      setUser: this.setUser,
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
