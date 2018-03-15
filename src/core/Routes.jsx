import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import Search from 'components/search/search-component';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route path="/examples/hello" component={ScreensExamplesHello}/>
      <Route path="/examples/fetch" component={ScreensExamplesFetch}/>
    </Switch>
  </BrowserRouter>
);
