import React, { useContext, useEffect, useRef, useState } from 'react';
import * as styles from './Header.module.scss';
import Button from '../Button/Button';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import cs from 'classnames';
import { isBrowser } from '../../../utils/isBrowser';
import routes from '../../../routes';
import { AuthContext } from '../../../context/AuthContext';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const headerRef = useRef(null);
  const { logoutUser, loginState } = useContext(AuthContext);
  const {
    strapiHeader: { logoText, text, mail, button, navigation },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      strapiHeader {
        button {
          secondary
          size
          text
          url
        }
        logoText
        mail
        text
        navigation {
          id
          title
          url
        }
      }
    }
  `);

  const handleBurgerClick = () => {
    setBurgerState((prev) => !prev);
  };

  useEffect(() => {
    if (isBrowser()) {
      const header = headerRef.current;
      const headerHeight = header.offsetHeight;

      window.addEventListener(
        'scroll',
        () => {
          const top = document.documentElement.scrollTop || document.body.scrollTop;
          if (top > headerHeight) {
            header.classList.add(styles.scroll);
          } else {
            header.classList.remove(styles.scroll);
          }
        },
        false
      );
    }
  }, []);

  return (
    <div className={styles.headerWrap} ref={headerRef}>
      <header className={styles.header}>
        <div className={styles.logoWrap}>
          <Link className={styles.logo} to="/">
            {logoText}
          </Link>
          <p className={styles.contact}>
            {text}
            <a className={styles.contactLink} href={`mailto: ${mail}`}>
              {mail}
            </a>
          </p>
        </div>

        <div className={styles.actionWrap}>
          <Button
            className={styles.subscription}
            type="link"
            to={button.url}
            size={button.size}
            secondary={button.secondary}
          >
            {button.text}
          </Button>

          <div className={styles.loginWrap}>
            <StaticImage
              className={styles.loginImage}
              src="../../../images/icons/person.svg"
              alt="user"
            />
            {loginState ? (
              <>
                <Button
                  className={styles.login}
                  to={routes.account}
                  type="link"
                  size="medium"
                  text
                  secondary
                >
                  Moje konto
                </Button>
                <span> / </span>
                <Button className={styles.register} size="medium" text onClick={logoutUser}>
                  Wyloguj
                </Button>
              </>
            ) : (
              <>
                <Button
                  className={styles.login}
                  to={routes.login}
                  type="link"
                  size="medium"
                  text
                  secondary
                >
                  Logowanie
                </Button>
                <span> / </span>
                <Button
                  className={styles.register}
                  to={routes.register}
                  type="link"
                  size="medium"
                  text
                >
                  Rejestracja
                </Button>
              </>
            )}
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
          {navigation.length &&
            navigation.map(({ id, title, url }) => (
              <li className={styles.navItem} key={id}>
                <Link
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to={url}
                  onClick={handleBurgerClick}
                >
                  {title}
                </Link>
              </li>
            ))}
          <li className={cs(styles.navItem, styles.mobile)}>
            <Link
              className={styles.navLink}
              activeClassName={styles.active}
              to={routes.login}
              onClick={handleBurgerClick}
            >
              Logowanie
            </Link>
          </li>
          <li className={cs(styles.navItem, styles.mobile)}>
            <Link
              className={styles.navLink}
              activeClassName={styles.active}
              to={routes.register}
              onClick={handleBurgerClick}
            >
              Rejestracja
            </Link>
          </li>
        </ul>
        <Button
          className={cs(styles.subscription, styles.mobile)}
          type="link"
          to={button.url}
          size={button.size}
          secondary={button.secondary}
        >
          {button.text}
        </Button>
      </nav>
    </div>
  );
};

export default Header;
