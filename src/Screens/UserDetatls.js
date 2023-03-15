import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const UserDetatls = () => {
  const { userId } = useParams()
  const { state } = useLocation()
  

  return (
    <>
      <h2>User { userId } details</h2>
      <p>This page show { state.name } details.</p>
    </>
  )
}

export default UserDetatls
