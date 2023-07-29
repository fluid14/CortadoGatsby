import React from 'react';
import { AUTH_TOKEN } from '../constant';
import { isBrowser } from '../utils/isBrowser';

const useToken = () => {
  const getToken = () => {
    if (isBrowser()) return localStorage.getItem(AUTH_TOKEN);
  };

  const setToken = (token) => {
    if (token) {
      if (isBrowser()) localStorage.setItem(AUTH_TOKEN, token);
    }
  };

  const removeToken = () => {
    if (isBrowser()) localStorage.removeItem(AUTH_TOKEN);
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default useToken;
