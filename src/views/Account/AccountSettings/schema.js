import * as Yup from 'yup';

export const schema = Yup.object().shape({
  username: Yup.string().required('To pole jest wymagane'),
  name: Yup.string().required('To pole jest wymagane'),
  surname: Yup.string().required('To pole jest wymagane'),
  email: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
  isPasswordChange: Yup.bool(),
  currentPassword: Yup.string()
    .when(['isPasswordChange'], {
      is: true,
      then: () => Yup.string().required('To pole jest wymagane'),
    })
    .min(6, 'Hasło musi mieć minimum 6 znaków'),
  password: Yup.string().when(['isPasswordChange'], {
    is: true,
    then: () =>
      Yup.string().required('To pole jest wymagane').min(6, 'Hasło musi mieć minimum 6 znaków'),
  }),
  passwordConfirmation: Yup.string().when(['isPasswordChange'], {
    is: true,
    then: () =>
      Yup.string()
        .required('To pole jest wymagane')
        .min(6, 'Hasło musi mieć minimum 6 znaków')
        .oneOf([Yup.ref('password')], 'Hasła muszą być takie same'),
  }),
});
