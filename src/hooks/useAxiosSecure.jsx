import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://course-master-server1.vercel.app/api',
});

const useAxiosSecure = () => {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use(config => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        console.log(error);
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, token, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
