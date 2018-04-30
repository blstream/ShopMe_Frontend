import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScreensHome from 'screens/Home/Home';
import ScreensSearch from 'screens/Search/Search';
import ScreensAddForm from 'screens/Add/Form/Form';
import ScreensOfferDetails from 'screens/OfferDetails/OfferDetails';
import ScreensLogin from 'screens/Login/Login';
import ScreensRegister from 'screens/Register/Register';
import ScreenSuccessAdd from 'screens/Add/SuccessAdd/SuccessAdd';
import ScreenSuccessRegister from 'screens/Register/SuccessRegister/SuccessRegister';
import ScreenTermsAndConditions from 'screens/Register/TermsAndConditions/TermsAndConditions';
import ScreensArticle from 'screens/Article/Article';
import Layout from 'components/App/Layout/Layout';

const wrapInLayout = Screen => props => <Layout><Screen {...props} /></Layout>;

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={wrapInLayout(ScreensHome)} />
      <Route path="/search/" render={wrapInLayout(ScreensSearch)} />
      <Route exact path="/add/form/success" render={wrapInLayout(ScreenSuccessAdd)} />
      <Route exact path="/register/success" render={wrapInLayout(ScreenSuccessRegister)} />
      <Route path="/add/form" render={wrapInLayout(ScreensAddForm)} />
      <Route path="/offer/:offerId" render={wrapInLayout(ScreensOfferDetails)} />
      <Route path="/login" render={wrapInLayout(ScreensLogin)} />
      <Route path="/register" render={wrapInLayout(ScreensRegister)} />
      <Route path="/articles/terms-and-conditions" render={wrapInLayout(ScreenTermsAndConditions)} />
      <Route path="/articles/:article" render={wrapInLayout(ScreensArticle)} />
    </Switch>
  </BrowserRouter>
);
