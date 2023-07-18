import React, { useState } from 'react';
import * as styles from './Header.module.scss';
import Button from '../Button/Button';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import cs from 'classnames';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);

  const handleBurgerClick = () => {
    console.log('click');
    setBurgerState((prev) => !prev);
  };

  return (
    <div className={styles.headerWrap}>
      <header className={styles.header}>
        <div className={styles.logoWrap}>
          <p className={styles.logo}>Cortado</p>
          <p className={styles.contact}>
            Zapytaj o produkt
            <a className={styles.contactLink} href="mailto: info@cortado.pl">
              info@cortado.pl
            </a>
          </p>
        </div>

        <div className={styles.actionWrap}>
          <img src="" alt="" />
          <Button size="small">Chcę subskrybować</Button>

          <div className={styles.loginWrap}>
            <StaticImage
              className={styles.loginImage}
              src="../../../images/icons/person.svg"
              alt="user"
            />
            <Button className={styles.login} size="medium" text secondary>
              Logowanie
            </Button>
            <span> / </span>
            <Button className={styles.register} size="medium" text>
              Rejestracja
            </Button>
          </div>

          <div
            className={cs(styles.hamburger, { [styles.active]: burgerState })}
            onClick={handleBurgerClick}
          >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
          </div>
        </div>
      </header>

      <nav className={cs(styles.nav, { [styles.active]: burgerState })}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} activeClassName={styles.active} to="/">
              Start
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} activeClassName={styles.active} to="/blog">
              Jak to działa
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} activeClassName={styles.active} to="/blog">
              Nasze kawy
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} activeClassName={styles.active} to="/blog">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
