import * as Yup from 'yup';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
});
