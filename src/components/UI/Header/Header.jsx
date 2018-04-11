import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import AddOfferLink from 'components/UI/AddOfferLink/AddOfferLink';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import './Header.css';

const Header = props => (
  <header>
    <Logo />
    <nav>
      {!props.isInvisible && <AddOfferLink />}
    </nav>
    <LoginButton />
  </header>
);

export default Header;
