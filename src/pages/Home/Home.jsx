import React from 'react';
import Hero from '../../components/Home/Hero';
import Stats from '../../components/Home/Stats';
import OngoingCourse from '../../components/Home/OngoingCourse';
import Testimonial from '../../components/Home/Testimonial';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import Consultation from '../../components/Home/Consultation';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <OngoingCourse />
      <Testimonial />
      <WhyChooseUs />
      <Consultation />
    </>
  );
};

export default Home;
