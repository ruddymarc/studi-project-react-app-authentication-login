import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/authenticator';

function ProtectedLayout() {
  const { signOut } = useAuth();
  return (
    <>
      <Outlet />
      <button type='button' onClick={signOut}>
        Sign out
      </button>
    </>
  );
}

export default ProtectedLayout;
