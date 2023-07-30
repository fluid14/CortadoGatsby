import React from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import { Link } from 'gatsby';
import PopupSubtitle from '../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import RegisterForm from '../../components/shared/forms/RegisterForm/RegisterForm';

const Register = () => {
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

        <RegisterForm />
      </Popup>
    </div>
  );
};

export default Register;
