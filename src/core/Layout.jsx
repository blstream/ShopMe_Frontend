import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Header from 'components/UI/Header/Header';
import Footer from 'components/UI/Footer/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'false',
    };
  }
  render() {
    const { children } = this.props;
    const childProps = {
      isLoggedIn: this.state.isLoggedIn,
    };
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) return React.cloneElement(child, childProps);
      return child;
    });
    return (
      <div>
        <Header />
        <main className={this.props.className}>
          {childrenWithProps}
        </main>
        <Footer />
      </div>
    );
  }
}

export { Layout };
export default translate()(Layout);
