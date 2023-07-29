import React, { useContext } from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import Button from '../../components/shared/Button/Button';
import { Link } from 'gatsby';
import PopupSubtitle from '../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import { useForm } from 'react-hook-form';
import Input from '../../components/shared/Inputs/Input/Input';
import Checkbox from '../../components/shared/Inputs/Checkbox/Checkbox';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    delete payload.regulations;
    delete payload.repeatPassword;

    registerUser(payload);
  };

  return (
    <div className={cs('section fullWidth small', styles.registerWrap)}>
      <Popup className={styles.popup}>
        <PopupTitle marginSmall>Zarejestruj się</PopupTitle>

        <PopupSubtitle>
          Masz już konto?&nbsp;
          <Link className="link" to="/logowanie">
            Zaloguj się
          </Link>
        </PopupSubtitle>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            ref={null}
            label="Nazwa użytkownika"
            name="username"
            type="text"
            error={errors.username}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          />
          <Input
            ref={null}
            label="Imię"
            name="name"
            type="text"
            error={errors.name}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          />
          <Input
            ref={null}
            label="Nazwisko"
            name="surname"
            type="text"
            error={errors.surname}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          />
          <Input
            ref={null}
            label="E-mail"
            name="email"
            type="email"
            error={errors.email}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          />
          <Input
            ref={null}
            label="Hasło"
            name="password"
            type="password"
            error={errors.password}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          />
          <Input
            ref={null}
            label="Powtórz hasło"
            name="repeatPassword"
            type="password"
            error={errors.repeatPassword}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          />

          <Checkbox
            ref={null}
            name="regulations"
            error={errors.regulations}
            register={register}
            validationSchema={{ required: 'To pole jest wymagane' }}
          >
            Rejestrując się potwierdzasz warunki&nbsp;
            <Link className="link" to="/regulamin">
              regulaminu
            </Link>
          </Checkbox>

          <Button className={styles.button} type="submit" size="medium">
            Zarejestruj się
          </Button>
        </form>
      </Popup>
    </div>
  );
};

export default Register;
