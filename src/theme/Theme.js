import React from 'react';
import Header from '../components/shared/Header/Header';
import { ToastContainer } from 'react-toastify';

const Theme = ({ children }) => {
  return (
    <>
      {/*<AuthProvider>*/}
      <Header />
      <main>{children}</main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/*</AuthProvider>*/}
    </>
  );
};

export default Theme;
