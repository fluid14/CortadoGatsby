import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PreloaderContext } from '../context/PreloaderContext';

export const useAxios = () => {
  const { showPreloader, hidePreloader } = useContext(PreloaderContext);

  const apiService = axios.create({
    baseURL: process.env.STRAPI_API_URL,
    headers: { 'Content-Type': 'application/json' },
  });

  apiService.interceptors.request.use((response) => {
    showPreloader();
    return response;
  });

  apiService.interceptors.response.use(
    (response) => {
      hidePreloader();
      toast.success(response.data.message);
      return response;
    },
    (error) => {
      hidePreloader();
      console.error(error);
      toast.error(error.message);
    }
  );

  return { apiService };
};
