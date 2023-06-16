import { logOut } from 'Redux/auth/auth-operations';
import { selectUserName } from 'Redux/auth/auth-selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton, UserInfoContainer, WelcomeText } from './UserMenuStyles';
import { FaUserCircle } from 'react-icons/fa';
import css from './IconUserStyles.module.css';

export const UserMenu = ({ icon }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <UserInfoContainer>
      <FaUserCircle className={css.icon} />
      <WelcomeText>Welcome, {name}</WelcomeText>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogoutButton>
    </UserInfoContainer>
  );
};
