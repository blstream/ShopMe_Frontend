import React from 'react';
import Header from 'components/UI/Header/Header';
import OfferDetails from 'components/OfferDetails/OfferDetails';

const OfferDetailsScreen = ({ match }) => (
  <div>
    <Header />
    <main>
      <OfferDetails offerId={match.params.offerId} />
    </main>
    <footer />
  </div>
);

export default OfferDetailsScreen;
