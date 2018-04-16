import React from 'react';
import OfferDetails from 'components/OfferDetails/OfferDetails';
import Layout from 'core/Layout';

const OfferDetailsScreen = ({ match }) => (
  <Layout>
    <OfferDetails offerId={match.params.offerId} />
  </Layout>
);

export { OfferDetailsScreen };
export default OfferDetailsScreen;
