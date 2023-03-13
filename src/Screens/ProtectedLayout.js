import React from 'react';
import { Outlet } from 'react-router-dom';

function ProtectedLayout() {
  return (
    <>
      <Outlet />
      <button type='button' onClick={() => { } }>
        Sign out
      </button>
    </>
  );
}

export default ProtectedLayout;
