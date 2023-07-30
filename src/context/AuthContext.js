import React, { createContext, useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import useToken from '../hooks/useToken';
import routes from '../routes.json';
import { BEARER } from '../constant';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const { apiService } = useAxios();
  const { getToken, setToken } = useToken();

  const authToken = getToken();

  useEffect(() => {
    if (authToken) {
      getCurrentUser(authToken);
    }
  }, [authToken]);

  const getCurrentUser = async (token) => {
    await apiService
      .get(routes.getCurrentUser, {
        headers: { Authorization: `${BEARER} ${token}` },
      })
      .then((response) => {
        setUserData(response?.data);
      });
  };

  const registerUser = async (data) => {
    await apiService.post(routes.register, data).then(async (response) => {
      const data = await response.data;
      setToken(data.jwt);
      setUserData(data.user);
      toast.success(`Zostałeś pomyślnie zarejestrowany!`);
      await navigate('/konto');
    });
  };

  const loginUser = async (data) => {
    await apiService.post(routes.login, data).then(async (response) => {
      const data = await response.data;
      setToken(data.jwt);
      setUserData(data.user);
      toast.success(`Zostałeś pomyślnie zalogowany!`);
      await navigate('/konto');
    });
  };

  return (
    <AuthContext.Provider value={{ user: userData, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
