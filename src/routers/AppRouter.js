import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';
import DashboardOfDashboards from '../components/DashboardOfDashboards';
import Header from '../components/Header';
import EditBillPage from '../components/EditBillPage';
import AddBillPage from '../components/AddBillPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard"
          component={DashboardOfDashboards} exact={true} />
        <PrivateRoute path="/addbill"
          component={AddBillPage} />
        <PrivateRoute path="/edit/:id"
          component={EditBillPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
