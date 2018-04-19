import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScreensSearch from 'screens/Search/Search';
import ScreensAddForm from 'screens/Add/Form/Form';
import ScreensOfferDetails from 'screens/OfferDetails/OfferDetails';
import ScreensLogin from 'screens/Login/Login';
import ScreensRegister from 'screens/Register/Register';
import ScreenSuccessAdd from 'screens/Add/SuccessAdd/SuccessAdd';
import ScreenSuccessRegister from 'screens/Register/SuccessRegister/SuccessRegister';
import ScreensTermsAndConditions from 'screens/Register/TermsAndConditions/TermsAndConditions';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensSearch} />
      <Route exact path="/add/form/success" component={ScreenSuccessAdd} />
      <Route exact path="/register/success" component={ScreenSuccessRegister} />
      <Route path="/add/form" component={ScreensAddForm} />
      <Route path="/offer/:offerId" component={ScreensOfferDetails} />
      <Route path="/login" component={ScreensLogin} />
      <Route path="/register" component={ScreensRegister} />
      <Route path="/terms" component={ScreensTermsAndConditions} />
    </Switch>
  </BrowserRouter>
);
