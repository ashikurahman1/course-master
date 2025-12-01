import React from 'react';
import Hero from '../../components/Home/Hero';
import Stats from '../../components/Home/Stats';
import OngoingCourse from '../../components/Home/OngoingCourse';
import Testimonial from '../../components/Home/Testimonial';
import WhyChooseUs from '../../components/Home/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <OngoingCourse />
      <Testimonial />
      <WhyChooseUs />
    </>
  );
};

export default Home;
