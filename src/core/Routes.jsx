import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import OfferSearch from 'screens/OfferSearch';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={OfferSearch} />      
      <Route path="/examples/hello" component={ScreensExamplesHello} />
      <Route path="/examples/fetch" component={ScreensExamplesFetch} />
    </Switch>
  </BrowserRouter>
);
