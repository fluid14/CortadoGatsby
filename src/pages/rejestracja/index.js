import React from 'react';
import Theme from '../../theme/Theme';
import cs from 'classnames';
import * as styles from './index.module.scss';
import Popup from '../../components/shared/Popup/Popup';
import PopupTitle from '../../components/shared/Popup/PopupTitle/PopupTitle';
import Input from '../../components/shared/Inputs/Input/Input';

const Register = () => {
  return (
    <Theme>
      <main className={cs('section fullWidth small', styles.registerWrap)}>
        <Popup>
          <PopupTitle>Zarejestruj się</PopupTitle>
          <Input
            title="Imię"
            name="name"
            type="text"
            placeholder="Imię"
            error="to jest przykladowy errror"
          />
        </Popup>
      </main>
    </Theme>
  );
};

export default Register;
