import React, { useState } from 'react';
import cs from 'classnames';
import * as styles from './OrderCoffeeCalculator.module.scss';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Inputs/Input/Input';
import Radio from '../../shared/Inputs/Radio/Radio';
import { isBrowser } from '../../../utils/isBrowser';
import loadable from '@loadable/component';
import { useForm } from 'react-hook-form';

const OrderCoffeeCalculator = () => {
  const [isCalculatorAccordion, setIsCalculatorAccordion] = useState(false);
  const [result, setResult] = useState(0);
  const {
    register,
    formState: { errors },
    getValues,
    setFocus,
  } = useForm({
    mode: 'onTouched',
  });

  if (!isBrowser()) return null;
  const Accordion = loadable(() =>
    import('react-bootstrap-accordion').then((module) => module.Accordion)
  );

  const toggleCalculatorState = () => setIsCalculatorAccordion((prev) => !prev);

  const handleChangeResult = () => {
    const { employeeAmount, coffeeAmount } = getValues();

    if (employeeAmount > 0 && coffeeAmount > 0) {
      const result = Math.ceil(employeeAmount * 21 * coffeeAmount * 0.008);
      setResult(() => result);
    } else {
      setResult(() => 0);
    }

    setTimeout(() => setFocus('employeeAmount'), 10);
  };

  return (
    <div className={styles.orderCoffeeCalculator}>
      <p className={cs(styles.description, 'mb-0')}>Nie wiesz ile kawy potrzebujecie?</p>
      <p className={styles.description}>
        Skorzystaj z naszego
        <Button className={styles.calculatorButton} onClick={toggleCalculatorState} text>
          &nbsp;kalkulatora
        </Button>
      </p>

      <Accordion title="" show={isCalculatorAccordion}>
        <div className={styles.calculatorContent}>
          <div className={styles.calculator}>
            <Input
              onChange={handleChangeResult}
              ref={null}
              label="Ilość pracowników"
              name="employeeAmount"
              type="number"
              error={errors.employeeAmount}
              register={register}
              className={styles.employeeAmount}
            />

            <div className={styles.coffeeAmountRadioWrap}>
              <p className={cs(styles.description, styles.radioDescription)}>
                Jak bardzo lubicie kawe?
              </p>

              <Radio
                className={styles.coffeeRadio}
                ref={null}
                name="coffeeAmount"
                error={errors.coffeeAmount}
                register={register}
                value="2"
                id="2"
                onChange={handleChangeResult}
              >
                1-2 kawy dziennie
              </Radio>
              <Radio
                className={styles.coffeeRadio}
                ref={null}
                name="coffeeAmount"
                error={errors.coffeeAmount}
                register={register}
                value="3"
                id="3"
                onChange={handleChangeResult}
              >
                3 kawy dziennie
              </Radio>
              <Radio
                className={styles.coffeeRadio}
                ref={null}
                name="coffeeAmount"
                error={errors.coffeeAmount}
                register={register}
                value="4.5"
                id="4+"
                onChange={handleChangeResult}
              >
                4+ kawy dziennie
              </Radio>
            </div>
          </div>

          {result > 0 && (
            <div className={styles.calculatorResult}>
              <p className={cs(styles.description, styles.resultDescription)}>
                Idealne na Twoje potrzeby będzie:
              </p>
              <h3 className={styles.result}>{result}kg</h3>
            </div>
          )}
        </div>
      </Accordion>
    </div>
  );
};

export default OrderCoffeeCalculator;
