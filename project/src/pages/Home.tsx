import React from 'react';
import Hero from '../components/Hero';
import ServiceCategories from '../components/ServiceCategories';
import FeaturedServices from '../components/FeaturedServices';
import HowItWorks from '../components/HowItWorks';
import SpecialOffers from '../components/SpecialOffers';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceCategories />
      <SpecialOffers />
      <FeaturedServices />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;