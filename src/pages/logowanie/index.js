import React from 'react';
import Theme from '../../theme/Theme';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import { Link } from 'gatsby';
import PopupSubtitle from '../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import LoginForm from '../../components/shared/forms/LoginForm/LoginForm';

const Login = () => {
  return (
    <Theme>
      <div className={cs('section fullWidth small', styles.loginWrap)}>
        <Popup className={styles.popup}>
          <PopupTitle marginSmall>Zaloguj się</PopupTitle>

          <PopupSubtitle>
            Nie masz jeszcze konta?&nbsp;
            <Link className="link" to="/rejestracja">
              Zarejestruj się
            </Link>
          </PopupSubtitle>

          <LoginForm />
        </Popup>
      </div>
    </Theme>
  );
};

export default Login;
