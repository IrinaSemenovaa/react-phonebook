import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthNavContainer } from './AuthNavStyles';
import css from './AuthNav.module.css';

export const AuthNav = ({ linkStyles, active }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AuthNavContainer>
      <NavLink
        to="/register"
        className={`${css.linkStyles} ${isActive('/register') ? css.active : ''}`}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={`${css.linkStyles} ${isActive('/login') ? css.active : ''}`}
      >
        Log In
      </NavLink>
    </AuthNavContainer>
  );
};



