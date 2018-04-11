import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import OfferAdd from 'components/UI/Add/OfferAdd';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import './Header.css';

const Header = props => (
  <header>
    <Logo />
    <nav>
      {!props.isInvisible && <OfferAdd />}
    </nav>
    <LoginButton />
  </header>
);

export default Header;
