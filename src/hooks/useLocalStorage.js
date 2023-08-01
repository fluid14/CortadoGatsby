import { isBrowser } from '../utils/isBrowser';

const useLocalStorage = () => {
  const getItem = (key) => {
    return isBrowser() ? JSON.parse(localStorage.getItem(key)) : null;
  };

  const setItem = (key, data) => {
    if (isBrowser()) localStorage.setItem(key, JSON.stringify(data));
  };

  const removeItem = (key) => {
    if (isBrowser()) localStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem };
};

export default useLocalStorage;
