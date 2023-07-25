import React from 'react';
import useModal from '../../../hooks/useModal';

const Modal = ({ children }) => {
  const { isShowing, toggle } = useModal();
  return (
    <Rodal visible={isShowing} onClose={toggle} animation="zoom">
      {children}
    </Rodal>
  );
};

export default Modal;
