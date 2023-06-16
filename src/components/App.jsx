import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'Redux/auth/auth-operations';
import { selectIsUserRefreshing } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { AppContainer } from './AppStyles';

const HomePage = lazy(() => import('Page/HomePage'));
const RegisterPage = lazy(() => import('Page/RegisterPage'));
const LoginPage = lazy(() => import('Page/LoginPage'));
const ContactsPage = lazy(() => import('Page/ContactsPage'));

export default function App() {
  const isUserRefreshing = useSelector(selectIsUserRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isUserRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <AppContainer>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </AppContainer>
  );
}
