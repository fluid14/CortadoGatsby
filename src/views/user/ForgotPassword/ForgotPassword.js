import React, { useContext, useEffect } from 'react';
import cs from 'classnames';
import * as styles from './ForgotPassword.module.scss';
import Popup from '../../../components/shared/Popup/Popup';
import PopupTitle from '../../../components/shared/Popup/PopupTitle/PopupTitle';
import { Link, navigate } from 'gatsby';
import PopupSubtitle from '../../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import routes from '../../../routes.json';
import { AuthContext } from '../../../context/AuthContext';
import ForgotPasswordForm from '../../../components/shared/forms/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPassword = () => {
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
            <PopupTitle marginSmall>Zmień hasło</PopupTitle>

            <PopupSubtitle>
              Nie masz jeszcze konta?&nbsp;
              <Link className="link" to={routes.register}>
                Zarejestruj się
              </Link>
            </PopupSubtitle>

            <ForgotPasswordForm />
          </Popup>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
