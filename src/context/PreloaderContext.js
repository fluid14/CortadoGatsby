import React, { createContext, useState } from 'react';

const PreloaderContext = createContext({
  showPreloader: () => {},
  hidePreloader: () => {},
  isLoading: false,
});

const PreloaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState();

  const showPreloader = () => setIsLoading(() => true);
  const hidePreloader = () => setIsLoading(() => false);

  return (
    <PreloaderContext.Provider value={{ showPreloader, hidePreloader, isLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export { PreloaderProvider, PreloaderContext };
