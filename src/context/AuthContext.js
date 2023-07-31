import React, { createContext, useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import useToken from '../hooks/useToken';
import routes from '../routes.json';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
import useUser from '../hooks/useUser';

const AuthContext = createContext({
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
  isLoggedIn: { logged: false, data: null },
});

const AuthProvider = ({ children }) => {
  const { apiService } = useAxios();
  const { setToken, removeToken } = useToken();
  const { getUser, setUser, removeUser } = useUser();
  const [isLoggedIn, setIsLogin] = useState({ logged: false, data: null });

  useEffect(() => {
    getUser()
      ? setIsLogin({ logged: true, data: getUser() })
      : setIsLogin({ logged: false, data: null });
  }, []);

  const registerUser = async (data) => {
    await apiService.post(routes.api.register, data).then(async ({ data }) => {
      setUser(data);
      setToken(data.jwt);
      setIsLogin({ logged: true, data });
      toast.success(`Zostałeś pomyślnie zarejestrowany!`);
      navigate(routes.account);
    });
  };

  const loginUser = async (data) => {
    await apiService.post(routes.api.login, data).then(async ({ data }) => {
      setUser(data);
      setToken(data.jwt);
      setIsLogin({ logged: true, data });
      toast.success(`Zostałeś pomyślnie zalogowany!`);
      navigate(routes.account);
    });
  };

  const logoutUser = () => {
    navigate(routes.home);
    removeUser();
    removeToken();
    setIsLogin({ logged: false, data: null });
  };

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, logoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
