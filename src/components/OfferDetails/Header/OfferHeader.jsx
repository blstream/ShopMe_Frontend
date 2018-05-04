import React from 'react';
import { translate } from 'react-i18next';
import './OfferHeader.css';

const OfferHeader = props => (
  <div>
    <h2 className="offer-details__header">{props.serviceTitle}</h2>
    <p className="offer-details__category">{props.t(`components.UI.categorySelect.categoryOptions.${props.serviceCategoryName}`)}</p>
  </div>
);

export { OfferHeader };
export default translate()(OfferHeader);
