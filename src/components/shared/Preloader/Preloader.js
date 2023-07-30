import React, { useContext } from 'react';
import { PreloaderContext } from '../../../context/PreloaderContext';
import * as styles from './Preloader.module.scss';

const Preloader = () => {
  const { isLoading } = useContext(PreloaderContext);

  return isLoading && <div className={styles.preloader} />;
};

export default Preloader;
