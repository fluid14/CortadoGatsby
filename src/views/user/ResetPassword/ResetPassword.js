import React, { useContext, useEffect } from 'react';
import cs from 'classnames';
import * as styles from './ResetPassword.module.scss';
import Popup from '../../../components/shared/Popup/Popup';
import PopupTitle from '../../../components/shared/Popup/PopupTitle/PopupTitle';
import { navigate } from 'gatsby';
import PopupSubtitle from '../../../components/shared/Popup/PopupSubtitle/PopupSubtitle';
import routes from '../../../routes.json';
import { AuthContext } from '../../../context/AuthContext';
import ResetPasswordForm from '../../../components/shared/forms/ResetPasswordForm/ResetPasswordForm';

const ResetPassword = () => {
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

            <PopupSubtitle>Wpisz nowe hasło i potwierdź</PopupSubtitle>

            <ResetPasswordForm />
          </Popup>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
