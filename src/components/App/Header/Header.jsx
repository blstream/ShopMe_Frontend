import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            {this.props.user.userToken ?
              <button onClick={this.toggleClass} className="header__arrow">
                <span className="user-name">Sławomir
                  <div className="header__icons">
                    {this.state.displayMenu ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
                  </div>
                </span>
              </button> : <LoginButton />}
            <div className={`${className} header__links`}>
              {this.props.user.userToken && <Link href="/add/form" to="/add/form" className="header__link">{this.props.t('components.UI.header.add')}</Link>}
              {this.props.user.userToken && <Link href="/" to="/" className="header__link">{this.props.t('components.UI.header.logout')}</Link>}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export { Header };
export default translate()(Header);
