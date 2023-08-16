import React from 'react';
import * as styles from './Confirm.module.scss';
import Button from '../../Button/Button';

const ConfirmModal = ({
  children,
  confirmText = 'Akceptuj',
  cancelText = 'Anuluj',
  confirmAction = () => {},
  cancelAction = () => {},
}) => {
  return (
    <div className={styles.confirmModal}>
      <h3 className={styles.title}>{children}</h3>
      <div className={styles.buttons}>
        <Button onClick={confirmAction} size="medium">
          {confirmText}
        </Button>
        <Button onClick={cancelAction} size="medium" secondary>
          {cancelText}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
