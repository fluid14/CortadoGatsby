import React, { createContext } from 'react';
import { useAxios } from '../hooks/useAxios';
import useToken from '../hooks/useToken';
import routes from '../routes.json';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
import useUser from '../hooks/useUser';

const AuthContext = createContext({
  user: {},
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
  isLogged: () => {},
});

const AuthProvider = ({ children }) => {
  const { apiService } = useAxios();
  const { setToken, removeToken } = useToken();
  const { getUser, setUser, removeUser } = useUser();

  const registerUser = async (data) => {
    await apiService.post(routes.api.register, data).then(async ({ data }) => {
      setUser(data);
      setToken(data.jwt);
      toast.success(`Zostałeś pomyślnie zarejestrowany!`);
      navigate(routes.account);
    });
  };

  const loginUser = async (data) => {
    await apiService.post(routes.api.login, data).then(async ({ data }) => {
      setUser(data);
      setToken(data.jwt);
      toast.success(`Zostałeś pomyślnie zalogowany!`);
      navigate(routes.account);
    });
  };

  const logoutUser = () => {
    removeUser();
    removeToken();
    navigate(routes.home);
  };

  const isLogged = () => !!getUser();

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, logoutUser, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
