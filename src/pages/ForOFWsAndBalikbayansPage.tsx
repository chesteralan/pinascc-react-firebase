import React from "react";
import Header from "../components/Header";
import ForOFWsAndBalikbayans from "../components/ForOFWsAndBalikbayans";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ForOFWsAndBalikbayansPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <ForOFWsAndBalikbayans />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ForOFWsAndBalikbayansPage;
