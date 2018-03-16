import React from 'react';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import './AddNewOffer.css';

const RedirectButton = withRouter(({ history }) => (
  <button
    type="button"
    className="btn"
    onClick={() => {
      history.push('/examples/fetch');
    }}
  >
    <i className="fas fa-plus-circle" />
  </button>
));

const AddNewOffer = () => (
  <div className="container">
    <div className="logo">
      <span>Shop Me</span>
    </div>
    <div className="row">
      <div className="wrapper">
        <div className="wrapper__btn">
          <RedirectButton />
        </div>
        <div className="wrapper__text">
          <span className="letter-spacing-0.3">Dodaj ofertę</span>
        </div>
      </div>
    </div>
  </div>
);

export { AddNewOffer };
export default translate()(AddNewOffer);
