import React, { useState } from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
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

registerLocale('pl', pl);

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: 'onTouched' });
  const [isVat, setIsVat] = useState(false);

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    console.log(payload);
  };

  const handleVatChange = () => {
    setIsVat((prev) => !prev);
  };

  return (
    <div className={cs('section fullWidth small', styles.orderWrap)}>
      <PopupHeader className={styles.popupHeader}>
        <PopupHeaderContentWrap>
          <h1 className="popupHeaderTitle">Twoja subskrypcja</h1>
        </PopupHeaderContentWrap>

        <Popup className={styles.orderPopup}>
          <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.step}>
              <div className={styles.stepTitleWrap}>
                <div className={styles.stepNumberWrap}>
                  <p className={styles.stepNumber}>1</p>
                </div>
                <h2 className={styles.title}>Wybierz kawę i jej ilość</h2>
              </div>
              <p className={styles.description}>Minimalna ilość to jedno opakowanie = 1 kg</p>
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
                  name="adress"
                  type="text"
                  error={errors.adress}
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
                  name="vat"
                  error={errors.vat}
                  register={register}
                  onClick={handleVatChange}
                >
                  Chcę fakturę VAT
                </Checkbox>
              </div>

              {isVat && (
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
                    name="companyAdress"
                    type="text"
                    error={errors.companyAdress}
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
          </form>
        </Popup>
      </PopupHeader>
    </div>
  );
};

export default OrderForm;
