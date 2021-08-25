import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, } from 'react-router-dom';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

import IndexRoute from 'routes/IndexRoute';
import Spinner from 'components/Spinner';
import configureStore from 'store/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <IndexRoute />
      <Spinner />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
