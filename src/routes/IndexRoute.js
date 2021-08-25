import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import App from 'containers/App';
import NotFound from 'containers/NotFound';

function IndexRoute() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dashboard" component={App} />
      {/* <Route path="/monitor" component={App} /> */}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default IndexRoute;
