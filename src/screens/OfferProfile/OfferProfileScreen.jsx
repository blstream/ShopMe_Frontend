import React from 'react';
import Logo from 'components/UI/Logo';
import OfferProfile from 'components/OfferProfile/OfferProfile';

const OfferProfileScreen = props => (
  <div>
    <Logo />
    <OfferProfile offerId={props.id} />
  </div>
);

export default OfferProfileScreen;
