import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  );
};

export default RootLayout;
