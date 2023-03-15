import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Layout from './Screens/Layout';
import ProtectedLayout from './Screens/ProtectedLayout';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Infos from './Screens/Infos';
import Protected from './Screens/Protected';
import UserList from './Screens/UserList';
import UserDetails from './Screens/UserDetatls';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='infos' element={<Infos />} />
          <Route path='protected' element={<Guard />}>
            <Route index element={<Protected />} />
            <Route path='users' element={<UserList />} />
            <Route path='user/:userId' element={<UserDetails />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='about' element={<Navigate to='/infos' replace />} />
        <Route path='users' element={<Navigate to='/protected/users' replace />} />
        <Route path='*' element={<Navigate to='/*' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function Guard() {
  return (
    window.localStorage.getItem('token')
      ? <ProtectedLayout />
      : <Navigate to='/login' />
  )
}

function NotFound() {
  return (
    <>
      <h2>This route not provided</h2>
      <p>Please <Link to='/'>back to homepage</Link></p>
    </>
  )
}

export default App;
