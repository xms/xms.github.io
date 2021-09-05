import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from 'containers/NotFound';
import Profile from 'containers/Profile';
import Worklist from 'containers/Worklist';
import EndlessChart from 'containers/EndlessChart';

// 這些是從鴻如、化育哥的網頁搬來的
// import EmbedPages from 'containers/EmbedPages';

function AppRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/worklist" component={Worklist} />
      <Route path="/endless" component={EndlessChart} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default AppRoute;
