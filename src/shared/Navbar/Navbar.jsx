import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Navbar.css';
import { Link, NavLink } from 'react-router';
import Logo from '../../components/Logo/Logo';

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Course', path: '/courses' },
  { name: 'Instructors', path: '/instructors' },
  { name: 'Testimonial', path: '/testimonial' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLinks = (className = 'menu-item') =>
    menuLinks.map(link => (
      <NavLink
        key={link.name}
        to={link.path}
        className={({ isActive }) =>
          `${className} ${
            isActive
              ? 'text-indigo-600 font-semibold'
              : 'text-gray-800 hover:text-indigo-600'
          }`
        }
      >
        {link.name}
      </NavLink>
    ));

  return (
    <header className="bg-white shadow-md fixed w-full z-100 ">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Logo />

        {/* Desktop Menu */}
        {!isMobile && (
          <>
            <div className="hidden md:flex space-x-6">{renderLinks()}</div>
          </>
        )}

        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        {/* Mobile Burger Menu */}
        {isMobile && <Menu right>{renderLinks()}</Menu>}
      </nav>
    </header>
  );
};

export default Navbar;
