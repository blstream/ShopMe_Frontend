import React from 'react';
import { Link } from 'react-router-dom';
import OfferAdd from 'components/UI/Add/OfferAdd';

const Logo = () => (
  <div className="logoContainer">
    <Link href="/" to="/">
      <span className="logoContainer__logo">ShopMe</span>
    </Link>
    <span className="logoContainer__addOffer">
      <OfferAdd />
    </span>
  </div>
);

export default Logo;
