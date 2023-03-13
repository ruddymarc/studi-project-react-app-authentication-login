import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Login form</h2>
      <form method='POST' onSubmit={onSubmit}>
        <label htmlFor='login'>Login</label>
        <input
          id="login"
          type="text"
          value={login}
          onChange={(event) => { setLogin(event.currentTarget.value); } } />

        <label htmlFor='password'>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => { setPassword(event.currentTarget.value); } } />

        <button type='submit'>Sign in</button>
      </form>
    </>
  );
}

export default Login
