import React from 'react';
import { translate } from 'react-i18next';
import './OfferPackage.css';

const OfferPackage = props => (
  <div className="offer-details__offers--container">
    <h3 className={props.class}>{props.header}</h3>
    <p className="offer-details__offers--description">{props.description}</p>
    <p className="offer-details__offers--price">{props.t('components.offerDetails.price')}: {props.price}zł</p>
  </div>
);

export { OfferPackage };
export default translate()(OfferPackage);
