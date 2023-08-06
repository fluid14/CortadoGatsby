import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

export const useStripe = () => {
  const stripe = loadStripe(process.env.STRIPE_PUBLISH_KEY);

  return { stripe };
};
