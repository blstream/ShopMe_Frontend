import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import AddNewOffer from 'components/UI/NewOffer/AddNewOfferComponent';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/add-new-offer" component={AddNewOffer} />
      <Route path="/examples/hello" component={ScreensExamplesHello} />
      <Route path="/examples/fetch" component={ScreensExamplesFetch} />
    </Switch>
  </BrowserRouter>
);
