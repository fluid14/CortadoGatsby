import React from 'react';
import axios from 'axios';

export const useAxios = () => {
  const apiService = axios.create({
    baseURL: process.env.STRAPI_API_URL,
  });
  apiService.interceptors.request.use((response) => {
    // showPreloader();
    return response;
  });

  apiService.interceptors.response.use(
    (response) => {
      // hidePreloader();
      return response;
    },
    (error) => {
      console.error(error);
    }
  );

  return { apiService };
};
