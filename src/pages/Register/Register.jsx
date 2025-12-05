import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
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

  const handleRegister = async data => {
    try {
      const res = await axios.post('/auth/register', data);

      if (res.data?.message === 'User Registered') {
        toast.success('Registration successful, Please login now');
        navigate('/login');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Registration failed');
      console.error('Registration failed:', error);
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
          Register
        </h2>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <label>Name:</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="input w-full mt-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label>Email:</label>
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
            <label>Password:</label>
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
              Register
            </button>
          </div>
        </form>

        <p className="mt-5 text-center" data-aos="fade-up" data-aos-delay="300">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
