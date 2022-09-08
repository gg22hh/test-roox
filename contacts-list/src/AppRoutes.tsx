import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from './modules/Contacts/ContactsPage';
import { AuthPage } from './modules/Login/AuthPage';
import { NoMatch } from './modules/NoMatch/NoMatch';
import { useAppSelector } from './store';
import { selectIsLoggedIn } from './store/slices/auth';

export const AppRoutes = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/contacts" /> : <Navigate to="/auth" />
          }
        />
        <Route
          path="/auth"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <AuthPage />}
        />

        {isLoggedIn && <Route path="/contacts" element={<ContactsPage />} />}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
