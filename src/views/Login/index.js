import React, { useContext, useEffect } from 'react';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import { Link, navigate } from 'gatsby';
import PopupSubtitle from '../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import LoginForm from '../../components/shared/forms/LoginForm/LoginForm';
import routes from '../../routes.json';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(routes.account);
    }
  }, []);

  return (
    <>
      {!isLoggedIn() && (
        <div className={cs('section fullWidth small', styles.loginWrap)}>
          <Popup className={styles.popup}>
            <PopupTitle marginSmall>Zaloguj się</PopupTitle>

            <PopupSubtitle>
              Nie masz jeszcze konta?&nbsp;
              <Link className="link" to={routes.register}>
                Zarejestruj się
              </Link>
            </PopupSubtitle>

            <LoginForm />
          </Popup>
        </div>
      )}
    </>
  );
};

export default Login;
