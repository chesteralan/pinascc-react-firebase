import React from "react";
import Header from "../components/Header";
import PinasNowTools from "../components/PinasNowTools";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const PinasNowToolsPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <PinasNowTools />
      <Newsletter />
      <Footer />
    </>
  );
};

export default PinasNowToolsPage;
