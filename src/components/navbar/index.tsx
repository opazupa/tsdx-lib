import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';

/**
 * NavBarProps
 */
export interface NavBarProps {
  // Optional title to navbar
  title?: string;
}

/**
 * NavBar component
 *
 * @param {NavBarProps}
 */
export const NavBar = ({ title }: NavBarProps) => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {title && <h6>{title}</h6>}
    </Toolbar>
  </AppBar>
);
