import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { checkAuth } from 'utils/Auth';

// 檢查有沒有登入的token，有才可以繼續瀏覽，沒有就導回login
// state 可以記錄狀態
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      /* console.log('props', props, rest); */
      return (
        checkAuth() ?
          <Component {...props} /> :
          <Redirect
            to={{
              pathname: '/login',
              state: { fromPath: props.location }
            }}
          />
      );
    }}
  />
);

export default PrivateRoute;
