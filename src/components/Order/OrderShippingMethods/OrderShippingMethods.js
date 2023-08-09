import React, { useEffect, useState } from 'react';
import Radio from '../../shared/Inputs/Radio/Radio';
import useApi from '../../../hooks/useApi';

const OrderShippingMethods = ({ register, errors, setValue }) => {
  const [shippingMethods, setShippingMethods] = useState([]);
  const [prevPrice, setPrevPrice] = useState(0);
  const { getShippingMethods } = useApi();

  useEffect(() => {
    getShippingMethods().then(({ data }) => {
      const {
        result: { data: shippingMethods },
      } = data;
      setShippingMethods(() => shippingMethods);
      console.log(shippingMethods);
    });
  }, []);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    const price = e.target.getAttribute('data-price');
    setValue('deliveryMethod', value, price - prevPrice);
    setPrevPrice(() => price);
  };

  return (
    <>
      {shippingMethods.map(({ id, active, display_name: name, fixed_amount: { amount } }) => (
        <>
          {active && (
            <Radio
              key={id}
              ref={null}
              name="deliveryMethod"
              error={errors.deliveryMethod}
              register={register}
              value={id}
              id={id}
              data-price={amount / 100}
              onClick={handleRadioChange}
            >
              {name}
            </Radio>
          )}
        </>
      ))}
    </>
  );
};

export default OrderShippingMethods;
