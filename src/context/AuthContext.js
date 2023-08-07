import React, { createContext, useEffect, useState } from 'react';
import routes from '../routes.json';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
import { useAxios } from '../hooks/useAxios';
import useLocalStorage from '../hooks/useLocalStorage';
import { AUTH_TOKEN, USER } from '../constant';

const AuthContext = createContext({
  isLoggedIn: () => {},
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
  getToken: () => {},
  getUser: () => {},
  updateUser: () => {},
  changeUserPassword: () => {},
  loginState: false,
});

const AuthProvider = ({ children }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const { apiStrapiService } = useAxios();
  const [loginState, setLoginState] = useState(() => false);

  useEffect(() => {
    if (getToken()) {
      setLoginState(() => true);
    }
  }, []);

  const registerUser = async (data) => {
    await apiStrapiService
      .post(routes.strapiApi.register, data)
      .then(async ({ data: { jwt, user } }) => {
        if (jwt) {
          setItem(AUTH_TOKEN, jwt);
          setItem(USER, user);
          setLoginState(() => true);
          toast.success(`Zostałeś pomyślnie zarejestrowany!`);
          await navigate(routes.account);
        }
      })
      .catch((error) => {
        if (
          error?.response?.status === 400 &&
          error?.response?.data?.error?.message === 'Email or Username are already taken'
        ) {
          toast.error(`Nazwa użytkownika lub email jest już zajęta!`);
        }
      });
  };

  const updateUser = async (data, userId) => {
    await apiStrapiService
      .put(routes.strapiApi.update.replace('{id}', userId), data)
      .then(async ({ data }) => {
        setItem(USER, data);
        toast.success(`Informacje zaktualizowane pomyślnie!`);
      });
  };

  const loginUser = async (data) => {
    await apiStrapiService
      .post(routes.strapiApi.login, data)
      .then(async ({ data: { jwt, user } }) => {
        setItem(AUTH_TOKEN, jwt);
        setItem(USER, user);
        setLoginState(() => true);
        toast.success(`Zostałeś pomyślnie zalogowany!`);
        await navigate(routes.account);
      })
      .catch((error) => {
        if (
          error?.response?.status === 400 &&
          error?.response?.data?.error?.message === 'Invalid identifier or password'
        ) {
          toast.error(`Nieprawidłowy email lub hasło!`);
        }
      });
  };

  const changeUserPassword = async (data) => {
    await apiStrapiService
      .post(routes.strapiApi.changePassword, data)
      .then(async () => {
        toast.success(`Hasło zostało zmienione!`);
      })
      .catch((error) => {
        if (
          error?.response?.status === 400 &&
          error?.response?.data?.error?.message === 'The provided current password is invalid'
        ) {
          toast.error(`Aktualne hasło jest nieprawidłowe!`);
        }
      });
  };

  const logoutUser = async () => {
    removeItem(USER);
    removeItem(AUTH_TOKEN);
    setLoginState(() => false);
    await navigate(routes.home);
  };

  const getToken = () => getItem(AUTH_TOKEN);

  const getUser = () => getItem(USER);

  const isLoggedIn = () => !!getToken();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        registerUser,
        loginUser,
        logoutUser,
        getToken,
        getUser,
        loginState,
        updateUser,
        changeUserPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
