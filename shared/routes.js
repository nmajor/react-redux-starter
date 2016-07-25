import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './App';
import HomeWrapper from './wrappers/HomeWrapper';
import RegisterWrapper from './wrappers/RegisterWrapper';
import LoginWrapper from './wrappers/LoginWrapper';
import DashboardWrapper from './wrappers/DashboardWrapper';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={HomeWrapper} />
    <Route path="/register" component={RegisterWrapper} />
    <Route path="/login" component={LoginWrapper} />
    <Route path="/dashboard" component={DashboardWrapper} />
  </Route>
);

export default routes;
