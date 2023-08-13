import React from 'react';
import { Router } from '@gatsbyjs/reach-router';
import Account from '../views/Account/Account';
import PrivateRoute from '../components/shared/PrivateRoute';
import Register from '../views/user/Register/Register';
import Login from '../views/user/Login/Login';
import AccountOrders from '../views/Account/AccountOrders/AccountOrders';
import AccountSettings from '../views/Account/AccountSettings/AccountSettings';
import Order from '../views/Order/Order';
import Summary from '../views/Summary/Summary';
import routes from '../routes.json';
import ForgotPassword from '../views/user/ForgotPassword/ForgotPassword';
import ResetPassword from '../views/user/ResetPassword/ResetPassword';

const App = () => {
  return (
    <>
      <Router>
        <PrivateRoute path={routes.account} component={Account}>
          <PrivateRoute path="/" component={AccountOrders} />
          <PrivateRoute path="/ustawienia" component={AccountSettings} />
        </PrivateRoute>
        <PrivateRoute path={routes.order} component={Order} />
        <PrivateRoute path={routes.orderSuccess} component={Summary} />
        <Login path={routes.login} />
        <Register path={routes.register} />
        <ForgotPassword path={routes.forgotPassword} />
        <ResetPassword path={routes.resetPassword} />
      </Router>
    </>
  );
};

export default App;
