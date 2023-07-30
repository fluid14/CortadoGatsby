import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import routes from '../../routes.json';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged() && location.pathname !== routes.login) {
    console.log('REDIRECT');
    navigate(routes.login);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
