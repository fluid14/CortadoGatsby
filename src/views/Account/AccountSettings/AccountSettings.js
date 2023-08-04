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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: { ...getUser() },
  });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    const { id } = getUser();
    console.log(id);
    console.log(payload);

    updateUser(payload, id);
  };

  return (
    <section className={styles.accountSettingsWrap}>
      <AccountContentTitle>Ustawienia</AccountContentTitle>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

        <Button className={styles.button} type="submit" size="medium">
          Zapisz
        </Button>
      </form>
    </section>
  );
};

export default AccountSettings;
