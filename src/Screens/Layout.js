import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navs from '../Components/Navs';

function Layout() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '15em 1fr',
    }}>
      <aside>
        <Navs />
      </aside>

      <main>
        <Outlet />
      </main>

      <footer style={{
        gridColumn: '1 / 3',
        textAlign: 'center',
      }}>
        This app is made with 💕 by
        <a href="https://github.com/ruddymarc/studi-project-react-app-authentication-login.git">
          Ruddy
        </a>
      </footer>
    </div>
  );
}

export default Layout;
