import React, { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const axios = useAxios();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  const handleLogin = async data => {
    try {
      const res = await axios.post('/auth/login', data);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        toast.success('Login successful');
        navigate('/dashboard');
      } else {
        toast.error(res.data?.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed');
    }
  };

  return (
    <div className="bg-linear-to-b from-primary/30 to-primary/10 min-h-screen flex items-center justify-center">
      <section
        className="p-6 lg:p-10 bg-white rounded-lg shadow-lg max-w-xl w-full"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl lg:text-4xl font-bold mb-10 text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Login
        </h2>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <label className="">Email:</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="input w-full mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="">Password:</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="input w-full mt-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-6">
            <button className="btn btn-primary w-full text-lg" type="submit">
              Login
            </button>
          </div>
        </form>

        <p className="mt-5 text-center" data-aos="fade-up" data-aos-delay="300">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
