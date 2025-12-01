import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/" className="text-xl lg:text-2xl font-bold ">
      Course<span className="text-indigo-600">Master</span>
    </Link>
  );
};

export default Logo;
