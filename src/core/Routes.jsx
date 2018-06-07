import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/App/ScrollToTop/ScrollToTop';
import HomeScreen from 'screens/Home/Home';
import SearchScreen from 'screens/Search/Search';
import AddFormScreen from 'screens/Add/Form/Form';
import OfferDetailsScreen from 'screens/OfferDetails/OfferDetails';
import LoginScreen from 'screens/Login/Login';
import SignUpScreen from 'screens/SignUp/SignUp';
import RegisterScreen from 'screens/Register/Register';
import SuccessAddScreen from 'screens/Add/SuccessAdd/SuccessAdd';
import SuccessRegisterScreen from 'screens/Register/SuccessRegister/SuccessRegister';
import ArticleScreen from 'screens/Article/Article';
import Layout from 'components/App/Layout/Layout';

const wrapInLayout = (Screen, options) => props => (
  <Layout requiresAuthorization={options && options.requiresAuthorization}>
    <Screen {...props} />
  </Layout>);

export default() => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" render={wrapInLayout(HomeScreen, { requiresAuthorization: false })} />
        <Route exact path="/search/" render={wrapInLayout(SearchScreen, { requiresAuthorization: false })} />
        <Route exact path="/add/form/success" render={wrapInLayout(SuccessAddScreen, { requiresAuthorization: true })} />
        <Route exact path="/register/success" render={wrapInLayout(SuccessRegisterScreen, { requiresAuthorization: false })} />
        <Route exact path="/add/form" render={wrapInLayout(AddFormScreen, { requiresAuthorization: true })} />
        <Route exact path="/offer/:offerId" render={wrapInLayout(OfferDetailsScreen, { requiresAuthorization: false })} />
        <Route exact path="/login" render={wrapInLayout(LoginScreen, { requiresAuthorization: false })} />
        <Route exact path="/signup" render={wrapInLayout(SignUpScreen, { requiresAuthorization: false })} />
        <Route exact path="/register" render={wrapInLayout(RegisterScreen, { requiresAuthorization: false })} />
        <Route exact path="/articles/:article" render={wrapInLayout(ArticleScreen, { requiresAuthorization: false })} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
