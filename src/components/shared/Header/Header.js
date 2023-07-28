import React, { useState } from 'react';
import * as styles from './Header.module.scss';
import Button from '../Button/Button';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, Link, StaticQuery } from 'gatsby';
import cs from 'classnames';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);

  const handleBurgerClick = () => {
    setBurgerState((prev) => !prev);
  };

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
      render={({ strapiHeader: { logoText, text, mail, button, navigation } }) => {
        return (
          <div className={styles.headerWrap}>
            <header className={styles.header}>
              <div className={styles.logoWrap}>
                <p className={styles.logo}>{logoText}</p>
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
                {navigation.length &&
                  navigation.map(({ id, title, url }) => (
                    <li className={styles.navItem} key={id}>
                      <Link className={styles.navLink} activeClassName={styles.active} to={url}>
                        {title}
                      </Link>
                    </li>
                  ))}
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
      }}
    />
  );
};

export default Header;
