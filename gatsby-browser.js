/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from 'react';
import './src/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Theme from './src/theme/Theme';
import { PreloaderProvider } from './src/context/PreloaderContext';
import Preloader from './src/components/shared/Preloader/Preloader';
import { AuthProvider } from './src/context/AuthContext';

export function shouldUpdateScroll() {
  setTimeout(() => window.scrollTo(0, 0), 0);
  return false;
}

export const wrapRootElement = ({ element }) => (
  <PreloaderProvider>
    <AuthProvider>
      <Theme>
        {element}
        <Preloader />
      </Theme>
    </AuthProvider>
  </PreloaderProvider>
);
