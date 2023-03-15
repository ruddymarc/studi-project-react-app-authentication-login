import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = [...Array(3).keys()].map((k) => ({
    id: ++k,
    name: `User ${k}`,
  }));
  
  return (
    <>
      <h2>Users</h2>
      <ol>
      { users.map((user) => (
        <li key={user.id}>
          <Link to={`../user/${user.id}`} state={user}>{user.name}</Link>
        </li>
      )) }
      </ol>
    </>
  )
}

export default UserList;
