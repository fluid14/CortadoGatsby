import * as Yup from 'yup';

export const schema = Yup.object().shape({
  identifier: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
  password: Yup.string()
    .required('To pole jest wymagane')
    .min(6, 'Hasło musi mieć minimum 6 znaków'),
});
