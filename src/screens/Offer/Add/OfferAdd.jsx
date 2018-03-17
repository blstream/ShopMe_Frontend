import React from 'react';
import { translate } from 'react-i18next';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

import './OfferAdd.css';

const RedirectButton = withRouter(({ history }) => (
  <button
    type="button"
    className="btn"
    onClick={() => {
      history.push('/examples/fetch');
    }}
  >
    <i className="fa fa-plus-circle" aria-hidden="true"></i>
  </button>
));

const ScreenOfferAdd = (props) => (
  <div className="container">
    <div className="logo">
      <span>Shop Me</span>
    </div>
    <div className="row">
      <div className="wrapper">
        <div className="wrapper__btn">
          <Router>
            <Route path="/" render={(props) => <RedirectButton {...props} title="Navigate to ScreenAddForm"/>}></Route>
          </Router>
        </div>
        <div className="wrapper__text">
          <span className="letter-spacing-0.3">{props.t('screens.offer.add.addOfferText')}</span>
        </div>
      </div>
    </div>
  </div>
);

export { ScreenOfferAdd };
export default translate()(ScreenOfferAdd);
