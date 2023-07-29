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
import Checkbox from '../../components/shared/Inputs/Checkbox/Checkbox';

const Register = () => {
  return (
    <Theme>
      <div className={cs('section fullWidth small', styles.registerWrap)}>
        <Popup className={styles.popup}>
          <PopupTitle marginSmall>Zarejestruj się</PopupTitle>

          <PopupSubtitle>
            Masz już konto?&nbsp;
            <Link className="link" to="/logowanie">
              Zaloguj się
            </Link>
          </PopupSubtitle>

          <form className={styles.form}>
            <Input title="Imię" name="name" type="text" required />
            <Input title="Nazwisko" name="surname" type="text" required />
            <Input title="E-mail" name="email" type="email" required />
            <Input title="Hasło" name="password" type="password" required />
            <Input title="Powtórz hasło" name="repeatPassword" type="password" required />
            <Checkbox name="regulations" required>
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
    </Theme>
  );
};

export default Register;
