import React from 'react';
import About from '../About Section/About';
import FAQs from '../FAQs/FAQs';
import Hero from '../Hero Section/Hero';
import Navbar from '../Navbar/Navbar';
import Newsletter from '../Newsletter/Newsletter';
import Partners from '../Partners/Partners';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <FAQs />
      <Newsletter />
    </div>
  );
}

export default Home;
