import React from 'react';
import { useAxios } from './useAxios';
import routes from '../routes.json';
import { useStripe } from './useStripe';

const useApi = () => {
  const { apiService } = useAxios();
  const { stripe } = useStripe();

  const createPaymentSession = async (body) => {
    apiService.post(routes.api.createPaymentSession, body).then(async ({ data }) => {
      const { result } = data;

      const redirectToCheckout = async () => {
        const stripePromise = await stripe;
        await stripePromise.redirectToCheckout({ sessionId: result.id });
      };

      await redirectToCheckout();
    });
  };

  return { createPaymentSession };
};

export default useApi;
