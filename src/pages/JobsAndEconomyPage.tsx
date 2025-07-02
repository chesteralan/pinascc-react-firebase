import React from 'react';
import Header from '../components/Header';
import JobsAndEconomy from '../components/JobsAndEconomy';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const JobsAndEconomyPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <JobsAndEconomy />
      <Newsletter />
      <Footer />
    </>
  );
};

export default JobsAndEconomyPage;
