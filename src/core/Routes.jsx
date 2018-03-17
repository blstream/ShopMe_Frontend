import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import ScreensSearch from 'screens/Search/Search';
import ScreensServicesResults from 'screens/Services/Results';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensSearch} />
      <Route path="/examples/hello" component={ScreensExamplesHello} />
      <Route path="/examples/fetch" component={ScreensExamplesFetch} />
      <Route path="/searchresults" component={ScreensServicesResults} />
    </Switch>
  </BrowserRouter>
);
