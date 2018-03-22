import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensSearch from 'screens/Search/Search';
import ScreensAddForm from 'screens/Add/Form/Form';
import ScreensServicesResults from 'screens/Services/Results';
import ScreensAddOffer from 'screens/Offer/Add/OfferAdd';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensSearch} />
      <Route path="/add/form" component={ScreensAddForm} />
      <Route path="/add-offer" component={ScreensAddOffer} />
      <Route path="/searchresults" component={ScreensServicesResults} />
    </Switch>
  </BrowserRouter>
);
