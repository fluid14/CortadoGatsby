import React, { useState } from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupHeader from '../../components/shared/Popup/PopupHeader/PopupHeader';
import PopupHeaderContentWrap from '../../components/shared/Popup/PopupHeader/PopupHeaderContentWrap/PopupHeaderContentWrap';
import { useForm } from 'react-hook-form';
import { registerLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import PopupFooter from '../../components/shared/Popup/PopupFooter/PopupFooter';
import PriceSummary from '../../components/shared/Typography/PriceSummary/PriceSummary';
import Button from '../../components/shared/Button/Button';
import Info from '../../components/shared/Info/Info';

registerLocale('pl', pl);

const SummaryForm = () => {
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

        <Popup className={styles.orderPopup} withFooter>
          <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contentWrap}>
              <h1>podsumowanie</h1>
            </div>
            <PopupFooter className={styles.popupFooter}>
              <Info className={styles.info}>Minimalna ilość to jedno opakowanie = 1 kg</Info>
              <div className={styles.right}>
                <PriceSummary className={styles.priceSummary}>
                  <span className="bold">Do zapłaty: 300 pln/</span>mc
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

export default SummaryForm;
