import React from 'react';
import OfferDetails from 'components/OfferDetails/OfferDetails';

const OfferDetailsScreen = ({ match }) => (
  <OfferDetails offerId={match.params.offerId} />
);

export { OfferDetailsScreen };
export default OfferDetailsScreen;
