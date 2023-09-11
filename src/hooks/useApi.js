import { useAxios } from './useAxios';
import routes from '../routes.json';
import { useStripe } from './useStripe';
import { navigate } from 'gatsby';

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

      if (body.status !== 'proforma') await redirectToCheckout();
      if (body.status === 'proforma') await navigate(routes.orderSuccessProforma);
    });
  };

  const getShippingMethods = async () => {
    return await apiService.get(routes.api.shippingMethods);
  };

  return { createPaymentSession, getShippingMethods };
};

export default useApi;
