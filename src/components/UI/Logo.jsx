import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logoContainer">
    <Link href="/" to="/">
      <p className="logoContainer__logo">ShopMe</p>
    </Link>
  </div>
);

export default Logo;
