import React from 'react';
import Header from '../components/Header';
import GovtServicesSimplified from '../components/GovtServicesSimplified';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const GovtServicesSimplifiedPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <GovtServicesSimplified />
      <Newsletter />
      <Footer />
    </>
  );
};

export default GovtServicesSimplifiedPage;
