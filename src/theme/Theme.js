import React, { useEffect, useState } from 'react';
import Header from '../components/shared/Header/Header';
import { ToastContainer } from 'react-toastify';

const Theme = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(() => true);
  }, []);

  return (
    <>
      {isClient && (
        <>
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
        </>
      )}
    </>
  );
};

export default Theme;
