import React from 'react';
import * as styles from './Footer.module.scss';
import Logo from '../Logo/Logo';
import cs from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          strapiFooter {
            address
            addressTitle
            city
            email
            logoText
            phone
            postalCode
            sectionInfo {
              sectionId
            }
            navigation {
              title
              url
              id
            }
          }
        }
      `}
      render={(footer) => <FooterComponent data={footer} />}
    />
  );
};

const FooterComponent = ({ data: { strapiFooter } }) => {
  console.log(strapiFooter);
  const {
    address,
    addressTitle,
    city,
    email,
    logoText,
    phone,
    postalCode,
    sectionInfo,
    navigation,
  } = strapiFooter;
  return (
    <footer className={cs('section fullWidth small', styles.footer)}>
      <Logo className={styles.logo}>{logoText}</Logo>

      <div className={styles.content}>
        <ul className={styles.menu}>
          {navigation.map(({ id, title, url }) => (
            <li className={styles.menuItem} key={id}>
              <AnchorLink to={url} className={styles.menuLink}>
                {title}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className={styles.contact} id={sectionInfo?.sectionId}>
          <p className={styles.contactCompany}>{addressTitle}</p>
          <p className={styles.contactText}>{address}</p>
          <p className={styles.contactText}>
            {postalCode} {city}
          </p>
        </div>

        <div className={styles.contactLinks}>
          <a className={styles.contactText} href={`tel: ${phone}`}>
            {phone}
          </a>
          <a className={styles.contactText} href={`mailto: ${email}`}>
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
