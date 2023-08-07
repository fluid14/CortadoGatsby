import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('To pole jest wymagane'),
  name: Yup.string().required('To pole jest wymagane'),
  surname: Yup.string().required('To pole jest wymagane'),
  email: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
  password: Yup.string()
    .required('To pole jest wymagane')
    .min(6, 'Hasło musi mieć minimum 6 znaków'),
  confirmPassword: Yup.string()
    .required('To pole jest wymagane')
    .min(6, 'Hasło musi mieć minimum 6 znaków')
    .oneOf([Yup.ref('password')], 'Hasła muszą być takie same'),
  regulations: Yup.bool().oneOf([true], 'To pole jest wymagane'),
});
