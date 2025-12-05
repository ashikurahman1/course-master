import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instructor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500/10 to-indigo-600/5">
      <div
        className="card bg-base-100 shadow-xl p-10 text-center"
        data-aos="zoom-in"
      >
        <h1
          className="text-4xl font-bold mb-4 text-primary"
          data-aos="fade-down"
        >
          Our Instructors
        </h1>
        <p className="text-xl mb-2" data-aos="fade-up" data-aos-delay="200">
          We are working on it!
        </p>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="400">
          All our instructors will be visible soon. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Instructor;
