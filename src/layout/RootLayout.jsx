import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

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
      <Footer />
    </div>
  );
};

export default RootLayout;
