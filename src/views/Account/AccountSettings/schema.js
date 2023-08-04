import * as Yup from 'yup';

export const schema = Yup.object().shape({
  username: Yup.string().required('To pole jest wymagane'),
  name: Yup.string().required('To pole jest wymagane'),
  surname: Yup.string().required('To pole jest wymagane'),
  email: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
});
