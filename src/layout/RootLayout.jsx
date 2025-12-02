import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

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
      <Toaster position="top-right" />
    </div>
  );
};

export default RootLayout;
