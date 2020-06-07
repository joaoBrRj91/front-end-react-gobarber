import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <CustomRoute path="/" exact component={SignIn} />
    <CustomRoute path="/signup" component={SignUp} />
    <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
