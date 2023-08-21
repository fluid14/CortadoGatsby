import React, { useContext, useEffect, useRef, useState } from 'react';
import * as styles from './Header.module.scss';
import Button from '../Button/Button';
import { graphql, Link, StaticQuery } from 'gatsby';
import cs from 'classnames';
import { isBrowser } from '../../../utils/isBrowser';
import routes from '../../../routes';
import { AuthContext } from '../../../context/AuthContext';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Logo from '../Logo/Logo';
import personImage from '../../../images/icons/person.svg';

const HeaderComponent = ({
  data: {
    strapiHeader: { logoText, text, mail, button, navigation },
  },
}) => {
  const [burgerState, setBurgerState] = useState(false);
  const headerRef = useRef(null);
  const { logoutUser, loginState } = useContext(AuthContext);

  const handleBurgerClick = () => {
    setBurgerState((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setBurgerState(() => false);
    }
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

      document.addEventListener('click', handleClickOutside, true);
    }
  }, []);

  return (
    <div className={styles.headerWrap} ref={headerRef}>
      <header className={styles.header}>
        <div className={styles.logoWrap}>
          <Logo>{logoText}</Logo>
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
            onClick={() => setBurgerState(false)}
          >
            {button.text}
          </Button>

          <div className={styles.loginWrap}>
            <img className={styles.loginImage} src={personImage} alt="user" />
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
              <li key={id} onClick={handleBurgerClick}>
                <AnchorLink className={styles.navLink} activeClassName={styles.active} to={url}>
                  {title}
                </AnchorLink>
              </li>
            ))}

          {loginState ? (
            <>
              <li className={cs(styles.mobile)}>
                <Link
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to={routes.account}
                  onClick={handleBurgerClick}
                >
                  Moje konto
                </Link>
              </li>
              <li className={cs(styles.mobile)}>
                <Link
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to={routes.account}
                  onClick={() => {
                    logoutUser();
                    handleBurgerClick();
                  }}
                >
                  Wyloguj
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={cs(styles.mobile)}>
                <Link
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to={routes.login}
                  onClick={handleBurgerClick}
                >
                  Logowanie
                </Link>
              </li>
              <li className={cs(styles.mobile)}>
                <Link
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to={routes.register}
                  onClick={handleBurgerClick}
                >
                  Rejestracja
                </Link>
              </li>
            </>
          )}
        </ul>
        <Button
          className={cs(styles.subscription, styles.mobile)}
          type="link"
          to={button.url}
          size={button.size}
          secondary={button.secondary}
          onClick={handleBurgerClick}
        >
          {button.text}
        </Button>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data) => {
        console.log(data);
        return <>{data && <HeaderComponent data={data} />}</>;
      }}
    />
  );
};

export default Header;
