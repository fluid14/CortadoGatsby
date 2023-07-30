import React from 'react';
import { Router } from '@gatsbyjs/reach-router';
import Account from '../layout/Account';
import PrivateRoute from '../components/shared/PrivateRoute';
import Register from '../views/Register';
import Login from '../views/Login';

const App = () => {
  return (
    <>
      <Router>
        <PrivateRoute path="/app/konto" component={Account} />
        <Login path="/app/logowanie" />
        <Register path="/app/rejestracja" />
      </Router>
    </>
  );
};

export default App;
