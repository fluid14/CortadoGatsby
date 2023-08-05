import React, { useContext } from 'react';
import * as styles from './AccountSettings.module.scss';
import AccountContentTitle from '../../../components/Account/AccountContentTitle/AccountContentTitle';
import Input from '../../../components/shared/Inputs/Input/Input';
import Button from '../../../components/shared/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { AuthContext } from '../../../context/AuthContext';

const AccountSettings = () => {
  const { updateUser, getUser } = useContext(AuthContext);
  const { name, surname, username, email } = getUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: { name, surname, username, email },
  });

  const onSubmit = async (data) => {
    const { id } = getUser();
    updateUser(
      {
        ...data,
      },
      id
    );
  };

  return (
    <section className={styles.accountSettingsWrap}>
      <AccountContentTitle>Ustawienia</AccountContentTitle>

      <form className={styles.formWrap} onSubmit={handleSubmit(onSubmit)}>
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
            label="Nazwa użytkownika"
            name="username"
            type="text"
            error={errors.username}
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
        </div>

        <Button className={styles.button} type="submit" size="medium">
          Zapisz
        </Button>
      </form>
    </section>
  );
};

export default AccountSettings;
