import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import AddOfferLink from 'components/UI/AddOfferLink/AddOfferLink';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.isLogged = !!document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.state = {
      isLogged: !!this.isLogged,
    };
  }

  render() {
    return (
      <header>
        <Logo />
        <nav>
          {this.state.isLogged && <AddOfferLink />}
        </nav>
        <LoginButton isLogged={this.state.isLogged} />
      </header>
    );
  }
}

export default Header;
