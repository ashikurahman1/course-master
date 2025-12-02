import React from 'react';
import Logo from '../../../components/Logo/Logo';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <header className="shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="avatar flex items-center gap-2">
          <h2 className="hidden lg:inline text-xl text-primary font-semibold">
            {user?.name}
          </h2>
          <div className="w-12 rounded-full">
            <img
              src={user?.avatar}
              className=" border-3 rounded-full border-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
