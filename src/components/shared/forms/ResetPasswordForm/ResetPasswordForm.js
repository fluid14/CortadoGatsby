import React, { useContext } from 'react';
import * as styles from './ResetPasswordForm.module.scss';
import Input from '../../Inputs/Input/Input';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../../../../schemas/resetPasswordSchema';
import { AuthContext } from '../../../../context/AuthContext';
import { isBrowser } from '../../../../utils/isBrowser';
import { navigate } from 'gatsby';
import routes from '../../../../routes.json';

const ResetPasswordForm = () => {
  const { resetPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', resolver: yupResolver(resetPasswordSchema) });

  const onSubmit = async (data) => {
    let code = null;
    if (isBrowser()) code = new URLSearchParams(window.location.search).get('code');

    const payload = {
      ...data,
      code,
    };

    resetPassword(payload);
    navigate(routes.login);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={null}
        label="Nowe hasło"
        name="password"
        type="password"
        error={errors.password}
        register={register}
      />

      <Input
        ref={null}
        label="Powtórz nowe hasło"
        name="passwordConfirmation"
        type="passwordConfirmation"
        error={errors.passwordConfirmation}
        register={register}
      />

      <Button className={styles.button} type="submit" size="medium">
        Zmień hasło
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
