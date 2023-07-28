import React from 'react';
import * as styles from './Partner.module.scss';
import Modal from '../../../shared/Modal/Modal';
import useModal from '../../../../hooks/useModal';
import { GatsbyImage } from 'gatsby-plugin-image';

const Partner = ({ image: { localFile, alternativeText }, text }) => {
  const { isShowing, toggle } = useModal();

  return (
    <button className={styles.button} onClick={toggle}>
      <GatsbyImage
        className={styles.logo}
        image={localFile.childImageSharp.gatsbyImageData}
        alt={alternativeText}
      />

      <Modal isShowing={isShowing} toggle={toggle}>
        <div className={styles.modalContent}>
          <GatsbyImage
            className={styles.modalLogo}
            image={localFile.childImageSharp.gatsbyImageData}
            alt={alternativeText}
          />
          <p>{text}</p>
        </div>
      </Modal>
    </button>
  );
};

export default Partner;
