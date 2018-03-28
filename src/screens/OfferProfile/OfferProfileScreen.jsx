import React from 'react';
import Logo from 'components/UI/Logo';
import OfferProfile from 'components/OfferProfile/OfferProfile';

const OfferProfileScreen = ({ match }) => (
  <div>
    <Logo />
    <OfferProfile offerId={match.params.offerId} />
  </div>
);

export default OfferProfileScreen;
