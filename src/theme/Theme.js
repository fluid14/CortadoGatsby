import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

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
          <main>
            {children}
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
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Theme;
