import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import useToken from '../hooks/useToken';
import routes from '../routes.json';
import { BEARER } from '../constant';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';

export const AuthContext = createContext({
  user: undefined,
  setUser: () => {},
  register: () => {},
});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const { apiService } = useAxios();
  const { getToken, setToken, setUser } = useToken();

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
        setUserData(response.json());
      })
      .catch((error) => {
        console.error(error);
        console.error('Error While Getting Logged In User Details');
      });
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  const register = async (values) => {
    await apiService
      .post(routes.register, {
        body: JSON.stringify(values),
      })
      .then(async (response) => {
        setUserData(response.json());

        const data = await response.json();

        if (data?.error) {
          throw data?.error;
        } else {
          setToken(data.jwt);
          setUser(data.user);
          toast.success(`Welcome to Social Cards ${data.user.username}!`);
          navigate('/profile', { replace: true });
        }
      });
  };

  return (
    <AuthContext.Provider value={{ user: userData, setUser: handleUser, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
