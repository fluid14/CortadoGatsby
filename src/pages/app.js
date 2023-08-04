import React from 'react';
import { Router } from '@gatsbyjs/reach-router';
import Account from '../views/Account/Account';
import PrivateRoute from '../components/shared/PrivateRoute';
import Register from '../views/Register/Register';
import Login from '../views/Login/Login';
import AccountOrders from '../views/Account/AccountOrders/AccountOrders';
import AccountSettings from '../views/Account/AccountSettings/AccountSettings';

const App = () => {
  return (
    <>
      <Router>
        <PrivateRoute path="/app/konto" component={Account}>
          <PrivateRoute path="/" component={AccountOrders} />
          <PrivateRoute path="/ustawienia" component={AccountSettings} />
        </PrivateRoute>
        <Login path="/app/logowanie" />
        <Register path="/app/rejestracja" />
      </Router>
    </>
  );
};

export default App;
