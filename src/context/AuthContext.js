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
  forgotPassword: () => {},
  resetPassword: () => {},
  loginState: false,
});

const AuthProvider = ({ children }) => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const { apiStrapiService, apiService } = useAxios();
  const [loginState, setLoginState] = useState(() => false);

  useEffect(() => {
    if (getToken()) {
      setLoginState(() => true);
    }
  }, []);

  const registerUser = async (data) => {
    await apiService
      .post(routes.api.user.register, data)
      .then(async ({ data: { jwt, user } }) => {
        if (jwt) {
          toast.success(`Zostałeś pomyślnie zarejestrowany! Teraz możesz się zalogować!`);
          await navigate(routes.login);
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
    await apiService
      .put(routes.api.user.update.replace('{id}', userId), data)
      .then(async ({ data }) => {
        setItem(USER, data);
        toast.success(`Informacje zaktualizowane pomyślnie!`);
      });
  };

  const loginUser = async (data) => {
    await apiService
      .post(routes.api.user.login, data)
      .then(async ({ data, data: { jwt, user } }) => {
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

  const forgotPassword = async (data) => {
    await apiService.post(routes.api.user.forgotPassword, data).then(async () => {
      toast.success(`Sprawdz swoja skrzynkę mailową!`);
    });
  };

  const resetPassword = async (data) => {
    await apiService
      .post(routes.api.user.resetPassword, data)
      .then(async () => {
        toast.success(`Hasło zostało zmienione!`);
      })
      .catch((error) => {
        if (error?.response?.status === 400) {
          toast.error(`Link do resetowania hasła wygasł!`);
        }
      });
  };

  const logoutUser = async () => {
    removeItem(USER);
    removeItem(AUTH_TOKEN);
    setLoginState(() => false);
    toast.success(`Do zobaczenia!`);
    await navigate(routes.login);
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
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
