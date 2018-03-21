import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import ScreensSearch from 'screens/Search/Search';
import ScreenOfferAdd from 'screens/Offer/Add/OfferAdd';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensSearch} />
      <Route exact path="/add" component={ScreenOfferAdd} />
      <Route path="/examples/hello" component={ScreensExamplesHello} />
      <Route path="/examples/fetch" component={ScreensExamplesFetch} />
    </Switch>
  </BrowserRouter>
);
