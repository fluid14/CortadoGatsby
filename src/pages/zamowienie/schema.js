import * as Yup from 'yup';

export const schema = Yup.object().shape({
  startDate: Yup.date().required('To pole jest wymagane'),
  name: Yup.string().required('To pole jest wymagane'),
  surname: Yup.string().required('To pole jest wymagane'),
  email: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
  city: Yup.string().required('To pole jest wymagane'),
  address: Yup.string().required('To pole jest wymagane'),
  zipCode: Yup.string().required('To pole jest wymagane'),
  isVat: Yup.bool(),
  companyName: Yup.string().when(['isVat'], {
    is: true,
    then: () => Yup.string().required('To pole jest wymagane'),
  }),
  nip: Yup.string().when(['isVat'], {
    is: true,
    then: () => Yup.string().required('To pole jest wymagane'),
  }),
  companyCity: Yup.string().when(['isVat'], {
    is: true,
    then: () => Yup.string().required('To pole jest wymagane'),
  }),
  companyAddress: Yup.string().when(['isVat'], {
    is: true,
    then: () => Yup.string().required('To pole jest wymagane'),
  }),
  companyZipCode: Yup.string().when(['isVat'], {
    is: true,
    then: () => Yup.string().required('To pole jest wymagane'),
  }),
  delivery: Yup.string().required('To pole jest wymagane'),
  regulations: Yup.bool().oneOf([true], 'To pole jest wymagane'),
});
