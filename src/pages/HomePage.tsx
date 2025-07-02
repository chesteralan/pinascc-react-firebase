import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickAccessTiles from '../components/QuickAccessTiles';
import KnowThePhilippines from '../components/KnowThePhilippines';
import TodayInPinas from '../components/TodayInPinas';
import TopDestinations from '../components/DiscoverPhilippines/TopDestinations';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const HomePage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <Hero />
      <QuickAccessTiles />
      <KnowThePhilippines />
      <TodayInPinas />
      <TopDestinations />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
