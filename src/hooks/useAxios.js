import { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PreloaderContext } from '../context/PreloaderContext';
import { AUTH_TOKEN, BEARER } from '../constant';
import useLocalStorage from './useLocalStorage';

export const useAxios = () => {
  const { showPreloader, hidePreloader } = useContext(PreloaderContext);
  const { getItem } = useLocalStorage();

  const baseURL = process.env.BE_API_URL;
  const xApiKey = process.env.BE_API_KEY;
  const apiService = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': xApiKey,
    },
  });

  apiService.interceptors.request.use((config) => {
    return onRequest(config);
  });

  apiService.interceptors.response.use(
    (response) => {
      return onResponse(response);
    },
    (error) => {
      return onResponseError(error);
    }
  );

  const strapiBaseURL = process.env.STRAPI_API_URL;
  const strapiToken = process.env.STRAPI_API_TOKEN;
  const apiStrapiService = axios.create({
    baseURL: strapiBaseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${BEARER} ${getItem(AUTH_TOKEN) ?? strapiToken}`,
    },
  });

  apiStrapiService.interceptors.request.use((config) => {
    return onRequest(config);
  });

  apiStrapiService.interceptors.response.use(
    (response) => {
      return onResponse(response);
    },
    (error) => {
      return onResponseError(error);
    }
  );

  const onRequest = (config) => {
    showPreloader();
    return config;
  };

  const onResponse = (response) => {
    hidePreloader();
    toast.success(response.data.message);
    return response;
  };

  const onResponseError = (error) => {
    hidePreloader();
    console.error(error);
    switch (error?.response?.status) {
      case 400:
        toast.error(error?.response?.data?.message);
        break;
      case 401:
        toast.error('Nie jesteś zalogowany');
        break;
      case 403:
        toast.error('Nie masz uprawnień do wykonania tej akcji');
        break;
      case 404:
        toast.error('Nie znaleziono zasobu');
        break;
      case 405:
        toast.error('Operacja niedozwolona');
        break;
      case 500:
        toast.error('Wewnętrzny błąd serwera');
        break;
      default:
        toast.error('Coś poszło nie tak');
        break;
    }
    return Promise.reject(error);
  };

  return { apiService, apiStrapiService };
};
