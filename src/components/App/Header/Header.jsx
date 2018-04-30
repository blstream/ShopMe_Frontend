import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.isLogged = !!localStorage.getItem('userToken');
    this.state = {
      isLogged: this.isLogged,
      displayMenu: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({ displayMenu: !this.state.displayMenu });
  }

  render() {
    const className = this.state.displayMenu ? 'menu-visible' : 'menu-invisible';
    return (
      <header>
        <div className="header__container">
          <div className="logo__link"><Link href="/" to="/"><img src="/img/logo.png" alt="logo" className="logo" /></Link></div>
          <nav>
            {this.state.isLogged ? <span className="user-name">Sławomir<button onClick={this.toggleClass} className="header__arrow"><i className="fas fa-angle-down" /></button></span> : <LoginButton />}
            <div className={`${className} header__links`}>
              {this.state.isLogged && <Link href="/add/form" to="/add/form" className="header__link">{this.props.t('components.UI.header.add')}</Link>}
              {this.state.isLogged && <Link href="/" to="/" className="header__link">{this.props.t('components.UI.header.logout')}</Link>}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export { Header };
export default translate()(Header);
