import React from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupHeader from '../../components/shared/Popup/PopupHeader/PopupHeader';
import PopupHeaderContentWrap from '../../components/shared/Popup/PopupHeader/PopupHeaderContentWrap/PopupHeaderContentWrap';
import Input from '../../components/shared/Inputs/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../components/shared/forms/RegisterForm/schema';
import { useForm } from 'react-hook-form';
import Checkbox from '../../components/shared/Inputs/Checkbox/Checkbox';

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    console.log(payload);
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

                <Checkbox ref={null} name="vat" error={errors.vat} register={register}>
                  Chcę fakturę VAT
                </Checkbox>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepTitleWrap}>
                <div className={styles.stepNumberWrap}>
                  <p className={styles.stepNumber}>4</p>
                </div>
                <h2 className={styles.title}>Sposób wysyłki</h2>
              </div>
            </div>
          </form>
        </Popup>
      </PopupHeader>
    </div>
  );
};

export default OrderForm;
