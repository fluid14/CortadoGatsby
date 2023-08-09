import React, { useContext } from 'react';
import routes from '../../routes.json';
import { navigate } from 'gatsby';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn()) {
    return navigate(routes.login);
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
