import React from 'react';
import * as styles from './Partner.module.scss';
import Modal from '../../../shared/Modal/Modal';
import useModal from '../../../../hooks/useModal';
import Image from '../../../shared/Image/Image';

const Partner = ({ image, text }) => {
  const { isShowing, toggle } = useModal();

  return (
    <button className={styles.button} onClick={toggle}>
      <Image className={styles.logo} image={image} />

      <Modal isShowing={isShowing} toggle={toggle}>
        <div className={styles.modalContent}>
          <Image className={styles.modalLogo} image={image} />

          <p>{text}</p>
        </div>
      </Modal>
    </button>
  );
};

export default Partner;
