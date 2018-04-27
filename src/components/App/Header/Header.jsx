import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.isLogged = !!localStorage.getItem('userToken');
    this.state = {
      isLogged: this.isLogged,
    };
  }

  render() {
    return (
      <header>
        <Link href="/" to="/"><img src="/img/logo.png" alt="logo" className="logo" /></Link>
        <nav>
          {this.state.isLogged ? <span className="user-name">Sławomir</span> : <LoginButton />}
          <div className="header__links">
            {this.state.isLogged && <Link href="/add/form" to="/add/form" className="header__link">dodaj ofertę</Link>}
            {this.state.isLogged && <Link href="/" to="/" className="header__link">wyloguj</Link>}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
