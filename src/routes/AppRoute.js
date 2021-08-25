import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from 'containers/NotFound';
import Profile from 'containers/Profile';

// 這些是從鴻如、化育哥的網頁搬來的
// import EmbedPages from 'containers/EmbedPages';

function AppRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Profile} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default AppRoute;
