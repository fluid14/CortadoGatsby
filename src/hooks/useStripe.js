import { loadStripe } from '@stripe/stripe-js';

export const useStripe = () => {
  const stripeKey = process.env.GATSBY_STRIPE_PUBLISH_KEY;
  const stripe = loadStripe(stripeKey);

  return { stripe };
};
