import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './OfferAdd.css';

const RedirectButton = () => (
  <button type="button" className="add-offer__btn add-offer__btn--black">
    <i className="fa fa-plus-circle" aria-hidden="true" />
  </button>
);

const ScreenOfferAdd = props => (
  <div className="add-offer">
    <div className="add-offer__link">
      <Link href="/add/form" to="/add/form"><RedirectButton /></Link>
    </div>
    <div className="add-offer__text">
      <span className="add-offer__text--letter-spacing">{props.t('components.UI.add.addOfferText')}</span>
    </div>
  </div>
);

export { ScreenOfferAdd };
export default translate()(ScreenOfferAdd);
