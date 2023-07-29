import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useAxios = () => {
  const apiService = axios.create({
    baseURL: process.env.STRAPI_API_URL,
  });
  apiService.interceptors.request.use((response) => {
    return response;
  });

  apiService.interceptors.response.use(
    (response) => {
      toast.success(response.data.message);
      return response;
    },
    (error) => {
      console.error(error);
      toast.error(error.response?.data.message);
    }
  );

  return { apiService };
};
