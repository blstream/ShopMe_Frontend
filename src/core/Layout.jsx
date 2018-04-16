import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Header from 'components/UI/Header/Header';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'false',
    };
  }
  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { isLoggedIn: this.state.isLoggedIn }));
    return (
      <div>
        <Header />
        <main className={this.props.className}>
          {childrenWithProps}
        </main>
        <footer />
      </div>
    );
  }
}

export { Layout };
export default translate()(Layout);
