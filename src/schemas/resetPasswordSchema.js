import * as Yup from 'yup';

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('To pole jest wymagane')
    .min(6, 'Hasło musi mieć minimum 6 znaków'),
  passwordConfirmation: Yup.string()
    .required('To pole jest wymagane')
    .min(6, 'Hasło musi mieć minimum 6 znaków')
    .oneOf([Yup.ref('password')], 'Hasła muszą być takie same'),
});
