/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from 'react';
import './src/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Theme from './src/theme/Theme';
import { AuthProvider } from './src/context/AuthContext';

export const wrapRootElement = ({ element }) => (
  <Theme>
    <AuthProvider>{element}</AuthProvider>
  </Theme>
);
