import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import * as styles from './Modal.module.scss';
import cs from 'classnames';

const Modal = ({ children, className, isShowing, toggle }) => {
  return (
    <Rodal
      className={cs(className, styles.modal)}
      visible={isShowing}
      onClose={toggle}
      animation="fade"
    >
      {children}
    </Rodal>
  );
};

export default Modal;
