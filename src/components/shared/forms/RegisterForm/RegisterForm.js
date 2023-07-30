import React, { useContext } from 'react';
import * as styles from './RegisterForm.module.scss';
import Input from '../../Inputs/Input/Input';
import Checkbox from '../../Inputs/Checkbox/Checkbox';
import { Link } from 'gatsby';
import Button from '../../Button/Button';
import { AuthContext } from '../../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    delete payload.regulations;
    delete payload.confirmPassword;

    registerUser(payload);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={null}
        label="Nazwa użytkownika"
        name="username"
        type="text"
        error={errors.username}
        register={register}
      />
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
        label="E-mail"
        name="email"
        type="email"
        error={errors.email}
        register={register}
      />
      <Input
        ref={null}
        label="Hasło"
        name="password"
        type="password"
        error={errors.password}
        register={register}
      />
      <Input
        ref={null}
        label="Powtórz hasło"
        name="confirmPassword"
        type="password"
        error={errors.confirmPassword}
        register={register}
      />

      <Checkbox ref={null} name="regulations" error={errors.regulations} register={register}>
        Rejestrując się potwierdzasz warunki&nbsp;
        <Link className="link" to="/regulamin">
          regulaminu
        </Link>
      </Checkbox>

      <Button className={styles.button} type="submit" size="medium">
        Zarejestruj się
      </Button>
    </form>
  );
};

export default RegisterForm;
