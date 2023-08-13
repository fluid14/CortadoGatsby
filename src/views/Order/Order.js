import React, { useContext, useState } from 'react';
import cs from 'classnames';
import * as styles from './Order.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupHeader from '../../components/shared/Popup/PopupHeader/PopupHeader';
import PopupHeaderContentWrap from '../../components/shared/Popup/PopupHeader/PopupHeaderContentWrap/PopupHeaderContentWrap';
import Input from '../../components/shared/Inputs/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import Checkbox from '../../components/shared/Inputs/Checkbox/Checkbox';
import DatePicker, { registerLocale } from 'react-datepicker';
import DatePickerWrap from '../../components/shared/Inputs/DatePickerWrap/DatePickerWrap';
import pl from 'date-fns/locale/pl';
import PopupFooter from '../../components/shared/Popup/PopupFooter/PopupFooter';
import PriceSummary from '../../components/shared/Typography/PriceSummary/PriceSummary';
import Button from '../../components/shared/Button/Button';
import { firstDayNextMonth } from '../../utils/date';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'gatsby';
import Info from '../../components/shared/Info/Info';
import OrderProductList from '../../components/Order/OrderProductList/OrderProductList';
import { orderSchema } from '../../schemas/orderSchema';
import { STRAPI_PRODUCT } from '../../constant';
import useApi from '../../hooks/useApi';
import { AuthContext } from '../../context/AuthContext';
import routes from '../../routes.json';
import { toast } from 'react-toastify';
import OrderShippingMethods from '../../components/Order/OrderShippingMethods/OrderShippingMethods';

registerLocale('pl', pl);

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(orderSchema),
    defaultValues: { subscriptionStartDate: firstDayNextMonth() },
  });
  const [isVat, setIsVat] = useState(false);
  const [isAnotherAddress, setIsAnotherAddress] = useState(false);
  const [priceSummary, setPriceSummary] = useState(0);
  const { getUser } = useContext(AuthContext);
  const { createPaymentSession } = useApi();

  const onSubmit = async (data) => {
    const {
      subscriptionStartDate,
      name,
      surname,
      email,
      city,
      line1: address,
      postalCode,
      phone,
      companyName = '',
      nip = '',
      companyCity = '',
      companyLine1 = '',
      companyPostalCode = '',
      companyPhone = '',
      addressName = '',
      addressSurname = '',
      addressCity = '',
      addressLine1 = '',
      addressPostalCode = '',
      addressPhone = '',
      deliveryMethod,
      regulations,
    } = data;

    const products = [];
    Object.keys(data).forEach((key) => {
      if (key.includes(STRAPI_PRODUCT) && data[key] > 0)
        products.push({ price: key.replace(STRAPI_PRODUCT, ''), quantity: data[key] });
    });

    const checkoutOptions = {
      line_items: products,
      mode: 'payment',
      payment_intent_data: {
        metadata: {
          subscriptionStartDate,
          customer: `
          ${name} ${surname}
          ${email}
          ${address}
          ${city} ${postalCode}
          ${phone}`,
          customerBillingAddress: '-',
          customerShippingAddress: '-',
        },
      },
      customer: getUser().stripeId,
      shipping_options: [{ shipping_rate: deliveryMethod }],
      success_url: routes.orderSuccess,
      cancel_url: routes.order,
    };

    if (isVat)
      checkoutOptions.payment_intent_data.metadata.customerBillingAddress = `
          ${companyName}
          ${nip}
          ${companyLine1}
          ${companyCity} ${companyPostalCode}
          ${companyPhone}`;

    if (isAnotherAddress)
      checkoutOptions.payment_intent_data.metadata.customerShippingAddress = `
          ${addressName} ${addressSurname}
          ${addressLine1}
          ${addressCity} ${addressPostalCode}
          ${addressPhone}`;

    if (products.length > 0 && regulations) {
      await createPaymentSession(checkoutOptions);
    } else if (products.length === 0) {
      toast.error('Wybierz przynajmniej jedno opakowanie kawy!');
    } else if (!regulations) {
      toast.error('Musisz zaakceptować regulamin!');
    }
  };

  const handleChangeProduct = (name, value, price) => {
    setValue(name, value);
    setPriceSummary((prev) => prev + price);
  };

  const handleVatChange = () => {
    setIsVat((prev) => !prev);
  };

  const handleAddressChange = () => {
    setIsAnotherAddress((prev) => !prev);
  };

  return (
    <div className={cs('section fullWidth small', styles.orderWrap)}>
      <PopupHeader className={styles.popupHeader}>
        <PopupHeaderContentWrap>
          <h1 className="popupHeaderTitle">Twoja subskrypcja</h1>
        </PopupHeaderContentWrap>

        <Popup className={styles.orderPopup} decorator withFooter>
          <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contentWrap}>
              <div className={styles.step}>
                <div className={styles.stepTitleWrap}>
                  <div className={styles.stepNumberWrap}>
                    <p className={styles.stepNumber}>1</p>
                  </div>
                  <h2 className={styles.title}>Wybierz kawę i jej ilość</h2>
                </div>
                <p className={styles.description}>Minimalna ilość to jedno opakowanie = 1 kg</p>

                <div className={cs(styles.form, styles.amountPicker)}>
                  <OrderProductList register={register} setValue={handleChangeProduct} />
                </div>

                <Info className={styles.info}>Minimalna ilość to jedno opakowanie = 1 kg</Info>
              </div>

              <div className={styles.step}>
                <div className={styles.stepTitleWrap}>
                  <div className={styles.stepNumberWrap}>
                    <p className={styles.stepNumber}>2</p>
                  </div>
                  <h2 className={styles.title}>Wybierz datę startową subskrypcji</h2>
                </div>
                <p className={styles.description}>
                  Subskrybcje możesz rozpocząć od 1 dnia kolejnego miesiąca lub od....
                </p>

                <div className={styles.form}>
                  <Controller
                    control={control}
                    name="subscriptionStartDate"
                    render={({ field }) => (
                      <DatePickerWrap label="Start subskrypcji" name="subscriptionStartDate">
                        <DatePicker
                          locale="pl"
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          dateFormat="dd.MM.yyyy"
                          onKeyDown={(e) => {
                            e.preventDefault();
                          }}
                        />
                      </DatePickerWrap>
                    )}
                  />
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepTitleWrap}>
                  <div className={styles.stepNumberWrap}>
                    <p className={styles.stepNumber}>3</p>
                  </div>
                  <h2 className={styles.title}>Twoje dane i adres wysyłki </h2>
                </div>
                <p className={styles.description}>
                  Subskrybcje możesz rozpocząć od 1 dnia kolejnego miesiąca lub od....
                </p>

                <div className={styles.form}>
                  <Input
                    ref={null}
                    label="Imię"
                    name="name"
                    type="text"
                    error={errors.name}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Nazwisko"
                    name="surname"
                    type="text"
                    error={errors.surname}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Adres email"
                    name="email"
                    type="email"
                    error={errors.email}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Miasto"
                    name="city"
                    type="text"
                    error={errors.city}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Ulica i numer lokalu"
                    name="line1"
                    type="text"
                    error={errors.line1}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Kod pocztowy"
                    name="postalCode"
                    type="text"
                    error={errors.postalCode}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Numer telefonu"
                    name="phone"
                    type="text"
                    error={errors.phone}
                    register={register}
                  />

                  <span className={styles.empty} />
                  <span />

                  <Checkbox
                    ref={null}
                    name="isVat"
                    error={errors.isVat}
                    register={register}
                    onClick={handleVatChange}
                  >
                    Chcę fakturę VAT
                  </Checkbox>

                  <Checkbox
                    ref={null}
                    name="isAnotherAddress"
                    error={errors.isAnotherAddress}
                    register={register}
                    onClick={handleAddressChange}
                  >
                    Inny adres wysyłki
                  </Checkbox>
                </div>

                {isVat && (
                  <div className={styles.additionalForm}>
                    <div className={styles.stepTitleWrap}>
                      <h2 className={styles.title}>Dane do faktury</h2>
                    </div>
                    <div className={cs(styles.form, styles.additionalForm)}>
                      <Input
                        ref={null}
                        label="Nazwa firmy"
                        name="companyName"
                        type="text"
                        error={errors.companyName}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Nip"
                        name="nip"
                        type="text"
                        error={errors.nip}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Miasto"
                        name="companyCity"
                        type="text"
                        error={errors.companyCity}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Ulica i numer lokalu"
                        name="companyLine1"
                        type="text"
                        error={errors.companyLine1}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Kod pocztowy"
                        name="companyPostalCode"
                        type="text"
                        error={errors.companyPostalCode}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Numer telefonu"
                        name="companyPhone"
                        type="text"
                        error={errors.companyPhone}
                        register={register}
                      />
                    </div>
                  </div>
                )}

                {isAnotherAddress && (
                  <div className={styles.additionalForm}>
                    <div className={styles.stepTitleWrap}>
                      <h2 className={styles.title}>Adres wysyłki</h2>
                    </div>
                    <div className={cs(styles.form, styles.additionalForm)}>
                      <Input
                        ref={null}
                        label="Imię"
                        name="addressName"
                        type="text"
                        error={errors.addressName}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Nazwisko"
                        name="addressSurname"
                        type="text"
                        error={errors.addressSurname}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Miasto"
                        name="addressCity"
                        type="text"
                        error={errors.addressCity}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Ulica i numer lokalu"
                        name="addressLine1"
                        type="text"
                        error={errors.addressLine1}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Kod pocztowy"
                        name="addressPostalCode"
                        type="text"
                        error={errors.addressPostalCode}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Numer telefonu"
                        name="addressPhone"
                        type="text"
                        error={errors.addressPhone}
                        register={register}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.step}>
                <div className={styles.stepTitleWrap}>
                  <div className={styles.stepNumberWrap}>
                    <p className={styles.stepNumber}>4</p>
                  </div>
                  <h2 className={styles.title}>Sposób wysyłki</h2>
                </div>

                <div className={cs(styles.form, styles.deliveryForm)}>
                  <OrderShippingMethods
                    register={register}
                    errors={errors}
                    setValue={handleChangeProduct}
                  />
                </div>
              </div>
            </div>
            <PopupFooter className={styles.popupFooter}>
              <Checkbox
                ref={null}
                className={styles.regulations}
                name="regulations"
                error={errors.regulations}
                register={register}
              >
                Akceptuje&nbsp;
                <Link className="link" to="/regulamin">
                  regulamin
                </Link>
              </Checkbox>
              <div className={styles.right}>
                <PriceSummary className={styles.priceSummary}>
                  <span className="bold">Do zapłaty: {priceSummary} pln/</span>mc
                </PriceSummary>
                <Button className={styles.submitButton} type="submit">
                  Następny krok
                </Button>
              </div>
            </PopupFooter>
          </form>
        </Popup>
      </PopupHeader>
    </div>
  );
};

export default Order;
