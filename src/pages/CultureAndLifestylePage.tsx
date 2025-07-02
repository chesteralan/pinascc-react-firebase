import React from "react";
import Header from "../components/Header";
import CultureAndLifestyle from "../components/CultureAndLifestyle";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const CultureAndLifestylePage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <CultureAndLifestyle />
      <Newsletter />
      <Footer />
    </>
  );
};

export default CultureAndLifestylePage;
