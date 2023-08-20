import React from 'react';
import * as styles from './Footer.module.scss';
import Logo from '../Logo/Logo';
import cs from 'classnames';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className={cs('section fullWidth small', styles.footer)}>
      <Logo className={styles.logo}>Cortado</Logo>

      <div className={styles.content}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.menuLink}>
              Start
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.menuLink}>
              Jak to działa
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.menuLink}>
              Nasze kawy
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.menuLink}>
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={styles.contact} id="kontakt">
          <p className={styles.contactCompany}>Cortado</p>
          <p className={styles.contactText}>ul.Przykładowa 12</p>
          <p className={styles.contactText}>00-000 Poznań</p>
        </div>

        <div className={styles.contactLinks}>
          <a className={styles.contactText} href="tel: +48999888777">
            +48999888777
          </a>
          <a className={styles.contactText} href="mailto: biuro@cortado.pl">
            biuro@cortado.pl
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
