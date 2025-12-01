import React from 'react';
import Hero from '../../components/Home/Hero';
import Stats from '../../components/Home/Stats';
import OngoingCourse from '../../components/Home/OngoingCourse';
import Testimonial from '../../components/Home/Testimonial';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <OngoingCourse />
      <Testimonial />
    </>
  );
};

export default Home;
