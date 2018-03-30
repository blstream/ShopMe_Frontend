import React from 'react';
import Logo from 'components/UI/Logo';
import OfferDetails from 'components/OfferDetails/OfferDetails';

const OfferDetailsScreen = ({ match }) => (
  <div>
    <Logo />
    <OfferDetails offerId={match.params.offerId} />
  </div>
);

export default OfferDetailsScreen;
