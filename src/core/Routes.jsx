import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from 'screens/Home/Home';
import SearchScreen from 'screens/Search/Search';
import AddFormScreen from 'screens/Add/Form/Form';
import OfferDetailsScreen from 'screens/OfferDetails/OfferDetails';
import LoginScreen from 'screens/Login/Login';
import SignUpScreen from 'screens/SignUp/SignUp';
import RegisterScreen from 'screens/Register/Register';
import SuccessAddScreen from 'screens/Add/SuccessAdd/SuccessAdd';
import SuccessRegisterScreen from 'screens/Register/SuccessRegister/SuccessRegister';
import TermsAndConditionsScreen from 'screens/Register/TermsAndConditions/TermsAndConditions';
import ArticleScreen from 'screens/Article/Article';
import Layout from 'components/App/Layout/Layout';

const wrapInLayout = Screen => props => <Layout><Screen {...props} /></Layout>;

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={wrapInLayout(HomeScreen)} />
      <Route exact path="/search/" render={wrapInLayout(SearchScreen)} />
      <Route exact path="/add/form/success" render={wrapInLayout(SuccessAddScreen)} />
      <Route exact path="/register/success" render={wrapInLayout(SuccessRegisterScreen)} />
      <Route exact path="/add/form" render={wrapInLayout(AddFormScreen)} />
      <Route exact path="/offer/:offerId" render={wrapInLayout(OfferDetailsScreen)} />
      <Route exact path="/login" render={wrapInLayout(LoginScreen)} />
      <Route exact path="/signup" render={wrapInLayout(SignUpScreen)} />
      <Route exact path="/register" render={wrapInLayout(RegisterScreen)} />
      <Route exact path="/articles/terms-and-conditions" render={wrapInLayout(TermsAndConditionsScreen)} />
      <Route exact path="/articles/:article" render={wrapInLayout(ArticleScreen)} />
    </Switch>
  </BrowserRouter>
);
