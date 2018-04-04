import React from 'react';
import { Link } from 'react-router-dom';
import 'components/UI/Logo.css';

const Logo = () => (
  <div className="logo-container">
    <Link href="/" to="/">
      <span className="logo-container__logo">ShopMe</span>
    </Link>
  </div>
);

export default Logo;
