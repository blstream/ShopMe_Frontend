import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './AddOfferLink.css';

const AddOfferLink = props => (
  <div className="add-offer">
    <div className="add-offer__link">
      <Link href="/add/form" to="/add/form">
        <i className="fa fa-plus-circle add-offer__btn add-offer__btn--black" aria-hidden="true" />
        <span className="add-offer__text add-offer__text--letter-spacing">{props.t('components.UI.add.addOfferText')}</span>
      </Link>
    </div>
  </div>
);

export { AddOfferLink };
export default translate()(AddOfferLink);
