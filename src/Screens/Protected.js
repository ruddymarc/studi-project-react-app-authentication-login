import React from 'react';

function Protected() {
  return (
    <>
      <h2>This page must be protected</h2>
      <p>
        To access this resource you will need to log in as an admin.
        Password is admin !
      </p>
    </>
  );
}

export default Protected;
