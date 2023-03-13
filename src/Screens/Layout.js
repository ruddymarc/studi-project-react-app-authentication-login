import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <aside>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          margin: "0.5em 1em",
        }}>
          <Link to='/'> Home </Link>
          <Link to='/login'> Login </Link>
          <Link to='/protected'> Protected homepage </Link>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>

      <footer style={{ textAlign: 'center', }}>
        This app is made with 💕 by
        <a href="https://github.com/ruddymarc/studi-project-react-app-authentication-login.git">
          Ruddy
        </a>
      </footer>
    </>
  );
}

export default Layout;
