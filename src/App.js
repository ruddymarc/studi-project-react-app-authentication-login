import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Screens/Layout';
import ProtectedLayout from './Screens/ProtectedLayout';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Protected from './Screens/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='protected' element={<ProtectedLayout />}>
            <Route index element={<Protected />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
