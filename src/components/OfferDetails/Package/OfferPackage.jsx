import React from 'react';
import { translate } from 'react-i18next';
import './OfferPackage.css';

const OfferPackage = props => (
  <div className="package__container">
    <div className={`package package__header package__header--${props.type}`}>{props.header}</div>
    <div className="package package__description">{props.description}</div>
    <div className="package package__price package__price--name">{props.t('components.foundSearchResults.price')}</div>
    <div className="package package__price package__price--value">{props.price} {props.t('components.foundSearchResults.currency')}</div>
  </div>
);

export { OfferPackage };
export default translate()(OfferPackage);
