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
      getUser(authToken);
    }
  }, [authToken]);

  const getUser = async (token) => {
    await apiService
      .get(routes.getCurrentUser, {
        headers: { Authorization: `${BEARER} ${token}` },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.error('Error While Getting Logged In User Details');
      });
  };

  const registerUser = async (data) => {
    await apiService.post(routes.register, data).then(async (response) => {
      const data = await response.data;
      console.log(data);
      if (data?.error) {
        throw data?.error;
      } else {
        setToken(data.jwt);
        setUserData(data.user);
        toast.success(`Welcome to Social Cards ${data.user.username}!`);
        await navigate('/konto');
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user: userData, registerUser }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
