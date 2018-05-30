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
    const userName = localStorage.getItem('userName');
    return (
      <header>
        <div className="header__container">
          <div className="logo__link"><Link href="/" to="/"><img src="/assets/images/logo.png" alt="logo" className="logo" /></Link></div>
          <nav>
            {userName ?
              <div>
                <button onClick={this.toggleClass} className="header__arrow">
                  <span className="user-name">{userName}
                    <div className="header__icons">
                      {this.state.displayMenu ? <img src="/assets/images/header/header-arrow-up.png" alt="" className="header__arrow-img" /> : <img src="/assets/images/header/header-arrow-down.png" alt="" className="header__arrow-img" />}
                    </div>
                  </span>
                </button>
              </div> : <LoginButton />}
            <div className={`${className} header__links`}>
              {userName && <Link href="/add/form" to="/add/form" className="header__link">{this.props.t('components.UI.header.add')}</Link>}
              {userName && <Link href="/" to="/" className="header__link" onClick={this.props.onClick}>{this.props.t('components.UI.header.logout')}</Link>}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export { Header };
export default translate()(Header);
