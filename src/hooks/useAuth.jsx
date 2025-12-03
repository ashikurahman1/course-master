import React from 'react';

const useAuth = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const userInfo = { token, user };
  return userInfo;
};

export default useAuth;
