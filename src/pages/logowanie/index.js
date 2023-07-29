import React from 'react';
import Theme from '../../theme/Theme';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import Input from '../../components/shared/Inputs/Input/Input';
import Button from '../../components/shared/Button/Button';
import { Link } from 'gatsby';
import PopupSubtitle from '../../components/shared/Popup/PopupSubtitle/PopupSubtitle';

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

          <form className={styles.form}>
            <Input title="E-mail" name="email" type="email" required />
            <Input title="Hasło" name="password" type="password" required />

            <Button className={styles.button} type="submit" size="medium">
              Zaloguj się
            </Button>
          </form>
        </Popup>
      </div>
    </Theme>
  );
};

export default Login;
