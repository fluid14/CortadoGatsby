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
import { AuthProvider } from './src/context/AuthContext';
import Preloader from './src/components/shared/Preloader/Preloader';

export const wrapRootElement = ({ element }) => (
  <Theme>
    <PreloaderProvider>
      <AuthProvider>
        {element}
        <Preloader />
      </AuthProvider>
    </PreloaderProvider>
  </Theme>
);
