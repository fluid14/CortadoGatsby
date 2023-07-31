import React from 'react';
import { isBrowser } from '../utils/isBrowser';
import { USER } from '../constant';

const useUser = () => {
  const getUser = () => {
    if (isBrowser()) return JSON.parse(localStorage.getItem(USER));
  };

  const setUser = (user) => {
    if (user) {
      if (isBrowser()) localStorage.setItem(USER, JSON.stringify(user));
    }
  };

  const removeUser = () => {
    if (isBrowser()) localStorage.removeItem(USER);
  };

  return {
    getUser,
    setUser,
    removeUser,
  };
};

export default useUser;
