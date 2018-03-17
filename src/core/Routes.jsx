import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensExamplesHello from 'screens/Examples/Hello';
import ScreensExamplesFetch from 'screens/Examples/Fetch';
import ScreensAddForm from 'screens/Add/Form/Form';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/examples/hello" component={ScreensExamplesHello} />
      <Route path="/examples/fetch" component={ScreensExamplesFetch} />
      <Route path="/add/form" component={ScreensAddForm} />
    </Switch>
  </BrowserRouter>
);
