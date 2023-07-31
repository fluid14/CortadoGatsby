import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import routes from '../../routes.json';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log('isLoggedInPRIVATEROUTE: ', isLoggedIn);
  }, [isLoggedIn]);

  if (!isLoggedIn.logged) {
    console.log('REDIRECT');
    navigate(routes.home);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
