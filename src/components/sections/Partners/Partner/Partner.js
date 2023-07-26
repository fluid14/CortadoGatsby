import React from 'react';
import * as styles from './Partner.module.scss';
import placeholder from '../../../../images/develop/picture.png';
import Modal from '../../../shared/Modal/Modal';
import useModal from '../../../../hooks/useModal';

const Partner = () => {
  const { isShowing, toggle } = useModal();

  return (
    <button className={styles.button} onClick={toggle}>
      <img className={styles.logo} src={placeholder} alt="placeholder" />

      <Modal isShowing={isShowing} toggle={toggle}>
        <div className={styles.modalContent}>
          <img className={styles.modalLogo} src={placeholder} alt="placeholder" />
          <p>
            Ta kawa smakuje Wam najbardziej. Starannie skomponowana receptura ziaren kawy 100%
            arabica z plantacji Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja
            ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi
            najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako
            skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych.
          </p>
        </div>
      </Modal>
    </button>
  );
};

export default Partner;
