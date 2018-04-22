import React from 'react';
import { translate } from 'react-i18next';
import OfferHeader from './Header/OfferHeader';
import OfferContact from './Contact/OfferContact';
import OfferPackage from './Package/OfferPackage';
import './OfferDetails.css';

const OfferDetails = (props) => {
  const { t } = props;
  const baseHeader = t('components.offerDetails.baseOffer').split(' ');
  baseHeader.splice(1, 0, <br key={1} />);
  const extendedHeader = t('components.offerDetails.extendedOffer').split(' ');
  extendedHeader.splice(1, 0, <br key={2} />);
  const extraHeader = t('components.offerDetails.extraOffer').split(' ');
  extraHeader.splice(1, 0, <br key={3} />);
  return (
    <section className="offer-details">
      {props.service.title && props.service.category.name &&
        <OfferHeader
          serviceTitle={props.service.title}
          serviceCategoryName={props.service.category.name}
        />}
      {props.service.user &&
        <OfferContact
          serviceUser={props.service.user}
        /> }
      <div className="offer-details__offers">
        {props.service.baseDescription &&
        <OfferPackage
          class="offer-details__offers--base--header"
          header={baseHeader}
          description={props.service.baseDescription}
          price={props.service.basePrice}
        /> }
        {props.service.extendedDescription &&
          <OfferPackage
            class="offer-details__offers--extended--header"
            header={extendedHeader}
            description={props.service.extendedDescription}
            price={props.service.extendedPrice}
          /> }
        {props.service.extraDescription &&
          <OfferPackage
            class="offer-details__offers--extra--header"
            header={extraHeader}
            description={props.service.extraDescription}
            price={props.service.extraPrice}
          />}
      </div>
    </section>
  );
};


export { OfferDetails };
export default translate()(OfferDetails);
