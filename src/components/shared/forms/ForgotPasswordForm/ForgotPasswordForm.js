import React, { useContext } from 'react';
import * as styles from './ForgotPasswordForm.module.scss';
import Input from '../../Inputs/Input/Input';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../../../../schemas/forgotPasswordSchema';
import { AuthContext } from '../../../../context/AuthContext';

const ForgotPasswordForm = () => {
  const { forgotPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched', resolver: yupResolver(forgotPasswordSchema) });

  const onSubmit = async (data) => {
    forgotPassword(data);
    reset({ email: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={null}
        label="E-mail"
        name="email"
        type="email"
        error={errors.email}
        register={register}
      />

      <Button className={styles.button} type="submit" size="medium">
        Zmień hasło
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
