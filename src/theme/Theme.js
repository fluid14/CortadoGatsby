import React from 'react';
import Header from '../components/shared/Header/Header';

const Theme = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Theme;
