import React, { useEffect } from 'react';
import { Router } from '@gatsbyjs/reach-router';
import PrivateRoute from '../components/shared/PrivateRoute';
import Login from '../views/user/Login/Login';
import Register from '../views/user/Register/Register';
import ForgotPassword from '../views/user/ForgotPassword/ForgotPassword';
import ResetPassword from '../views/user/ResetPassword/ResetPassword';
import Account from '../views/Account/Account';
import AccountOrders from '../views/Account/AccountOrders/AccountOrders';
import AccountSettings from '../views/Account/AccountSettings/AccountSettings';
import Order from '../views/Order/Order';
import Summary from '../views/Summary/Summary';
import routes from '../routes';
import SummaryProforma from '../views/SummaryProforma/SummaryProforma';

const App = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {!hasMounted ? null : (
        <Router>
          <PrivateRoute path={routes.account} component={Account}>
            <PrivateRoute path="/" component={AccountOrders} />
            <PrivateRoute path="/ustawienia" component={AccountSettings} />
          </PrivateRoute>
          <PrivateRoute path={routes.order} component={Order} />
          <PrivateRoute path={routes.orderSuccess} component={Summary} />
          <PrivateRoute path={routes.orderSuccessProforma} component={SummaryProforma} />
          <Login path={routes.login} />
          <Register path={routes.register} />
          <ForgotPassword path={routes.forgotPassword} />
          <ResetPassword path={routes.resetPassword} />
        </Router>
      )}
    </>
  );
};

export default App;
