import React, { useContext } from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import { Link, navigate } from 'gatsby';
import PopupSubtitle from '../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import RegisterForm from '../../components/shared/forms/RegisterForm/RegisterForm';
import routes from '../../routes.json';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { isLogged } = useContext(AuthContext);
  if (isLogged()) {
    navigate(`/app/konto`);
  }

  return (
    <div className={cs('section fullWidth small', styles.registerWrap)}>
      <Popup className={styles.popup}>
        <PopupTitle marginSmall>Zarejestruj się</PopupTitle>

        <PopupSubtitle>
          Masz już konto?&nbsp;
          <Link className="link" to={routes.login}>
            Zaloguj się
          </Link>
        </PopupSubtitle>

        <RegisterForm />
      </Popup>
    </div>
  );
};

export default Register;
