import React from 'react';
import { Link } from 'react-router';
import heroImage from '../../assets/edtech-hero.webp';
const Hero = () => {
  return (
    <section className="relative  w-full overflow-hidden ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="container mx-auto p-4  pt-30 pb-10 lg:pb-20 flex flex-col-reverse xl:flex-row items-center gap-8">
        <div className="w-full xl:w-1/2 space-y-5 lg:space-y-10">
          <h1 className="text-5xl lg:text-8xl font-bold tracking-wide">
            Unlock Your Potential with{' '}
            <span className="text-primary">CourseMaster.</span>
          </h1>
          <p className="mb-10 lg:mb-15 text-gray-700 text-base md:text-lg lg:text-xl">
            Explore thousands of online courses, track your progress, and gain
            new skills anytime, anywhere. Designed for students, instructors,
            and lifelong learners.
          </p>
          <Link
            to="/"
            className="bg-linear-to-br from-indigo-500 via-90% to-indigo-700 p-4 block lg:inline px-18 rounded-md shadow-md font-semibold  transition-all duration-150   text-white text-center text-xl cursor-pointer hover:opacity-90"
          >
            Get Started Now
          </Link>
        </div>
        <div className="xl:w-1/2 flex justify-center lg:justify-end relative">
          <div className="bg-indigo-300 animate-ping absolute w-40 h-40 rounded-full "></div>
          <div className="bg-indigo-400 animate-ping absolute w-40 h-40 rounded-full bottom-0"></div>
          <div className="bg-indigo-400 animate-ping absolute w-10  h-10 duration-150 rounded-full left-10"></div>
          <div className="p-3 border-teal-600 border-6 rounded-full z-50">
            <div className="bg-teal-600 rounded-full w-80 lg:w-120 h-80 lg:h-120 overflow-hidden ">
              <img src={heroImage} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
