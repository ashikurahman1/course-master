import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Outlet */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  );
};

export default RootLayout;
