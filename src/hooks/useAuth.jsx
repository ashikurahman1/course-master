import React from 'react';

const useAuth = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const userInfo = {
    token,
    user: user ? JSON.parse(user) : null,
  };
  return userInfo;
};

export default useAuth;
