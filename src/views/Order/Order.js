import React, { useState } from 'react';
import cs from 'classnames';
import * as styles from './Order.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupHeader from '../../components/shared/Popup/PopupHeader/PopupHeader';
import PopupHeaderContentWrap from '../../components/shared/Popup/PopupHeader/PopupHeaderContentWrap/PopupHeaderContentWrap';
import Input from '../../components/shared/Inputs/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import Checkbox from '../../components/shared/Inputs/Checkbox/Checkbox';
import Radio from '../../components/shared/Inputs/Radio/Radio';
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
    defaultValues: { startDate: firstDayNextMonth() },
  });
  const [isVat, setIsVat] = useState(false);
  const [isAnotherAddress, setIsAnotherAddress] = useState(false);
  const [priceSummary, setPriceSummary] = useState(0);
  const { createPaymentSession } = useApi();

  const onSubmit = async (data) => {
    const { name, surname, city, address: addressLine, zipCode: postalCode } = data;

    const products = [];
    Object.keys(data).forEach((key) => {
      if (key.includes(STRAPI_PRODUCT) && data[key] > 0)
        products.push({ price: key.replace(STRAPI_PRODUCT, ''), quantity: data[key] });
    });

    console.log(products);

    const checkoutOptions = {
      mode: 'payment',
      lineItems: products,
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
      billingAddressCollection: 'required',
      // shippingAddressCollection: {
      //   recipient: `${name} ${surname}`,
      //   city,
      //   postalCode,
      //   addressLine,
      // },
    };

    // const redirectToCheckout = async () => {
    //   const stripePromise = await stripe;
    //   await stripePromise.redirectToCheckout(checkoutOptions);
    // };
    //
    // if (products.length > 0) {
    //   await redirectToCheckout();
    // } else {
    //   toast.error('Wybierz przynajmniej jedno opakowanie kawy');
    // }

    await createPaymentSession(checkoutOptions);
    // console.log(payload);
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
                    name="startDate"
                    render={({ field }) => (
                      <DatePickerWrap label="Start subskrypcji" name="startDate">
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
                    name="address"
                    type="text"
                    error={errors.address}
                    register={register}
                  />

                  <Input
                    ref={null}
                    label="Kod pocztowy"
                    name="zipCode"
                    type="text"
                    error={errors.zipCode}
                    register={register}
                  />

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
                        name="companyAddress"
                        type="text"
                        error={errors.companyAddress}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Kod pocztowy"
                        name="companyZipCode"
                        type="text"
                        error={errors.companyZipCode}
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
                        name="addresName"
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
                        name="addressAddress"
                        type="text"
                        error={errors.addressAddress}
                        register={register}
                      />

                      <Input
                        ref={null}
                        label="Kod pocztowy"
                        name="addressZipCode"
                        type="text"
                        error={errors.addressZipCode}
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
                  <Radio
                    ref={null}
                    name="delivery"
                    error={errors.delivery}
                    register={register}
                    value="dpd"
                    id="dpd"
                  >
                    DPD
                  </Radio>

                  <Radio
                    ref={null}
                    name="delivery"
                    error={errors.delivery}
                    register={register}
                    value="dpd"
                    id="dpd"
                  >
                    DHL
                  </Radio>

                  <Radio
                    ref={null}
                    name="delivery"
                    error={errors.delivery}
                    register={register}
                    value="dpd"
                    id="dpd"
                  >
                    INPOST
                  </Radio>
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
