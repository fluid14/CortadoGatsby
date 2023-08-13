import React, { useContext } from 'react';
import * as styles from './LoginForm.module.scss';
import Input from '../../Inputs/Input/Input';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../../schemas/loginSchema';
import { AuthContext } from '../../../../context/AuthContext';
import { Link } from 'gatsby';
import routes from '../../../../routes';
import cs from 'classnames';

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', resolver: yupResolver(loginSchema) });

  const onSubmit = async (data) => loginUser(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={null}
        label="E-mail"
        name="identifier"
        type="email"
        error={errors.identifier}
        register={register}
      />
      <Input
        ref={null}
        className={styles.password}
        label="Hasło"
        name="password"
        type="password"
        error={errors.password}
        register={register}
      />

      <div className={styles.forgotPassword}>
        <Link className={cs('link', styles.link)} to={routes.forgotPassword}>
          Zapomniałeś hasła?
        </Link>
      </div>

      <Button className={styles.button} type="submit" size="medium">
        Zaloguj się
      </Button>
    </form>
  );
};

export default LoginForm;
