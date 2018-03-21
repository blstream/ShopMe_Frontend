import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';

import './OfferAdd.css';

const RedirectButton = () => (
  <button type="button" className="btn btn--black">
    <i className="fa fa-plus-circle" aria-hidden="true" />
  </button>
);

const ScreenOfferAdd = props => (
  <div className="container">
    <div className="logo">
      <span>Shop Me</span>
    </div>
    <div className="row">
      <div className="wrapper">
        <div className="wrapper__btn">
          <Link to="/examples/fetch"><RedirectButton /></Link>
        </div>
        <div className="wrapper__text">
          <span className="letter-spacing">{props.t('screens.offer.add.addOfferText')}</span>
        </div>
      </div>
    </div>
  </div>
);

export { ScreenOfferAdd };
export default translate()(ScreenOfferAdd);
