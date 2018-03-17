import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import ScreensSearch from 'screens/Search/Search';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ScreensSearch} />
      <Route path="/examples/hello" component={ScreensExamplesHello} />
      <Route path="/examples/fetch" component={ScreensExamplesFetch} />
    </Switch>
  </BrowserRouter>
);
