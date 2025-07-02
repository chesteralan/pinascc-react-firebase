import React from "react";
import Header from "../components/Header";
import DiscoverPhilippines from "../components/DiscoverPhilippines";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const DiscoverPhilippinesPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <DiscoverPhilippines />
      <Newsletter />
      <Footer />
    </>
  );
};

export default DiscoverPhilippinesPage;
