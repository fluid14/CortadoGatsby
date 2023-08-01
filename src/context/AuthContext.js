import React, { createContext, useEffect, useState } from 'react';
import routes from '../routes.json';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
import { useAxios } from '../hooks/useAxios';
import useLocalStorage from '../hooks/useLocalStorage';
import { AUTH_TOKEN, USER } from '../constant';

const AuthContext = createContext({
  isLoggedIn: false,
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
  getToken: () => {},
  getUser: () => {},
});

const AuthProvider = ({ children }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const { apiService } = useAxios();
  const [isLoggedIn, setIsLoggedIn] = useState(() => false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(() => true);
    }
  }, []);

  const registerUser = async (data) => {
    await apiService.post(routes.api.register, data).then(async ({ data: { jwt, user } }) => {
      setItem(AUTH_TOKEN, jwt);
      setItem(USER, user);
      setIsLoggedIn(() => true);
      toast.success(`Zostałeś pomyślnie zarejestrowany!`);
      await navigate(routes.account);
    });
  };

  const loginUser = async (data) => {
    await apiService.post(routes.api.login, data).then(async ({ data: { jwt, user } }) => {
      setItem(AUTH_TOKEN, jwt);
      setItem(USER, user);
      setIsLoggedIn(() => true);
      toast.success(`Zostałeś pomyślnie zalogowany!`);
      await navigate(routes.account);
    });
  };

  const logoutUser = async () => {
    removeItem(USER);
    removeItem(AUTH_TOKEN);
    setIsLoggedIn(() => false);
    await navigate(routes.home);
  };

  const getToken = () => getItem(AUTH_TOKEN);

  const getUser = () => getItem(USER);

  // const isLoggedIn = () => !!getToken();

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, registerUser, loginUser, logoutUser, getToken, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
