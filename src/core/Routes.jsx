import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScreensSearch from 'screens/Search/Search';
import ScreensAddForm from 'screens/Add/Form/Form';
import ScreensOfferProfile from 'screens/OfferProfile/OfferProfile';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensSearch} />
      <Route path="/add/form" component={ScreensAddForm} />
      <Route path="/offerprofile" component={ScreensOfferProfile} />
    </Switch>
  </BrowserRouter>
);
