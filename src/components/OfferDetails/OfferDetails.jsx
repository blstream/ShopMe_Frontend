import React from 'react';
import { translate } from 'react-i18next';
import OfferContact from './Contact/OfferContact';
import OfferPackage from './Package/OfferPackage';
import './OfferDetails.css';

const OfferDetails = (props) => {
  const { t } = props;
  return (
    <div className="offer-details">
      <div className="top">
        <h1 className="header2">{props.service.title}</h1>
        {props.service.user &&
        <OfferContact
          serviceUser={props.service}
        /> }
        <div className="border" />
      </div>
      {/* <div className="bottom">
        <h2 className="offer__details--packets">Pakiety usług</h2>
        {props.service.baseDescription &&
        <OfferPackage
          type="base"
          header={t('components.offerDetails.baseOffer')}
          description={props.service.baseDescription}
          price={props.service.basePrice}
        /> }
        {props.service.extendedDescription &&
          <OfferPackage
            type="extended"
            header={t('components.offerDetails.extendedOffer')}
            description={props.service.extendedDescription}
            price={props.service.extendedPrice}
          /> }
        {props.service.extraDescription &&
          <OfferPackage
            type="extra"
            header={t('components.offerDetails.extraOffer')}
            description={props.service.extraDescription}
            price={props.service.extraPrice}
          />}
      </div> */}
    </div>
  );
};


export { OfferDetails };
export default translate()(OfferDetails);
