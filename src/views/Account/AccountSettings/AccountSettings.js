import React, { useContext, useState } from 'react';
import * as styles from './AccountSettings.module.scss';
import AccountContentTitle from '../../../components/Account/AccountContentTitle/AccountContentTitle';
import Input from '../../../components/shared/Inputs/Input/Input';
import Button from '../../../components/shared/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { AuthContext } from '../../../context/AuthContext';
import Checkbox from '../../../components/shared/Inputs/Checkbox/Checkbox';
import cs from 'classnames';

const AccountSettings = () => {
  const { updateUser, getUser, changeUserPassword } = useContext(AuthContext);
  const { name, surname, username, email } = getUser();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChangeState = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: { name, surname, username, email },
  });

  const onSubmit = async ({
    name,
    surname,
    username,
    email,
    currentPassword,
    password,
    passwordConfirmation,
  }) => {
    const { id } = getUser();
    const payload = {
      name,
      surname,
      username,
      email,
    };
    updateUser(payload, id);

    if (isPasswordVisible) {
      const payload = {
        currentPassword,
        password,
        passwordConfirmation,
      };
      changeUserPassword(payload);
    }
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

          <Checkbox
            ref={null}
            name="isPasswordChange"
            error={errors.isPasswordChange}
            register={register}
            onClick={handlePasswordChangeState}
          >
            Zmień hasło
          </Checkbox>
        </div>

        {isPasswordVisible && (
          <div className={cs(styles.form, styles.passwordForm)}>
            <>
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
                type="password"
                error={errors.passwordConfirmation}
                register={register}
              />
              <Input
                ref={null}
                label="Aktualne hasło"
                name="currentPassword"
                type="password"
                error={errors.currentPassword}
                register={register}
              />
            </>
          </div>
        )}

        <Button className={styles.button} type="submit" size="medium">
          Zapisz
        </Button>
      </form>
    </section>
  );
};

export default AccountSettings;
