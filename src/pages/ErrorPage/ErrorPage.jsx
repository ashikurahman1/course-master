import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary btn-lg animate-bounce">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
