import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PreloaderContext } from '../context/PreloaderContext';
import { BEARER } from '../constant';
import { AuthContext } from '../context/AuthContext';

export const useAxios = () => {
  const { showPreloader, hidePreloader } = useContext(PreloaderContext);
  const { getToken } = useContext(AuthContext);

  const apiService = axios.create({
    baseURL: process.env.STRAPI_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${BEARER} ${process.env.STRAPI_API_TOKEN}`,
    },
  });

  apiService.interceptors.request.use((response) => {
    onRequest(response);
  });

  apiService.interceptors.response.use(
    (response) => {
      onResponse(response);
    },
    (error) => {
      onResponseError(error);
    }
  );

  const apiUserService = axios.create({
    baseURL: process.env.STRAPI_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${BEARER} ${getToken()}`,
    },
  });

  apiUserService.interceptors.request.use((response) => {
    onRequest(response);
  });

  apiUserService.interceptors.response.use(
    (response) => {
      onResponse(response);
    },
    (error) => {
      onResponseError(error);
    }
  );

  const onRequest = (response) => {
    showPreloader();
    return response;
  };

  const onResponse = (response) => {
    hidePreloader();
    toast.success(response.data.message);
    return response;
  };

  const onResponseError = (error) => {
    hidePreloader();
    console.error(error);
    toast.error('Coś poszło nie tak');
    return Promise.reject(error);
  };

  return { apiService, apiUserService };
};
