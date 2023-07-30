import React, { createContext, useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import useToken from '../hooks/useToken';
import routes from '../routes.json';
import { BEARER } from '../constant';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

const AuthContext = createContext({
  user: {},
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
  isLogged: () => {},
});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { apiService } = useAxios();
  const { getToken, setToken, removeToken } = useToken();

  const authToken = getToken();

  useEffect(() => {
    if (authToken && !userData) {
      console.log('GET CURRENT USER');
      getCurrentUser(authToken);
    }
  }, [authToken]);

  const getCurrentUser = async (token) => {
    await apiService
      .get(routes.api.getCurrentUser, {
        headers: { Authorization: `${BEARER} ${token}` },
      })
      .then(async ({ data }) => {
        setUserData(() => data);
      });
  };

  const registerUser = async (data) => {
    await apiService.post(routes.api.register, data).then(async ({ data }) => {
      setUserData(() => data);
      setToken(data.jwt);
      toast.success(`Zostałeś pomyślnie zarejestrowany!`);
      navigate(routes.account);
    });
  };

  const loginUser = async (data) => {
    await apiService.post(routes.api.login, data).then(async ({ data }) => {
      setToken(data.jwt);
      setUserData(() => data);
      toast.success(`Zostałeś pomyślnie zalogowany!`);
      navigate(routes.account);
    });
  };

  const logoutUser = () => {
    removeToken();
    setUserData(() => null);
    navigate(routes.home);
  };

  const isLogged = () => {
    return userData;
  };

  return (
    <AuthContext.Provider value={{ user: userData, registerUser, loginUser, logoutUser, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
