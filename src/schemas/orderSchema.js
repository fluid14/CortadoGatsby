import * as Yup from 'yup';

export const orderSchema = Yup.object().shape({
  // subscriptionStartDate: Yup.date().required('To pole jest wymagane'),
  // name: Yup.string().required('To pole jest wymagane'),
  // surname: Yup.string().required('To pole jest wymagane'),
  // email: Yup.string().email('Pole musi być adresem email').required('To pole jest wymagane'),
  // city: Yup.string().required('To pole jest wymagane'),
  // line1: Yup.string().required('To pole jest wymagane'),
  // postalCode: Yup.string().required('To pole jest wymagane'),
  // phone: Yup.string().required('To pole jest wymagane'),
  // isVat: Yup.bool(),
  // isAnotherAddress: Yup.bool(),
  // companyName: Yup.string().when(['isVat'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // nip: Yup.string().when(['isVat'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // companyCity: Yup.string().when(['isVat'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // companyLine1: Yup.string().when(['isVat'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // companyPostalCode: Yup.string().when(['isVat'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // companyPhone: Yup.string().when(['isVat'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // addressName: Yup.string().when(['isAnotherAddress'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // addressSurname: Yup.string().when(['isAnotherAddress'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // addressCity: Yup.string().when(['isAnotherAddress'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // addressLine1: Yup.string().when(['isAnotherAddress'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // addressPostalCode: Yup.string().when(['isAnotherAddress'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // addressPhone: Yup.string().when(['isAnotherAddress'], {
  //   is: true,
  //   then: () => Yup.string().required('To pole jest wymagane'),
  // }),
  // deliveryMethod: Yup.string().required('To pole jest wymagane'),
  // regulations: Yup.bool().oneOf([true], 'To pole jest wymagane'),
});
