import React from "react";
import Header from "../components/Header";
import NewsAndHappenings from "../components/NewsAndHappenings";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const NewsAndHappeningsPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <NewsAndHappenings />
      <Newsletter />
      <Footer />
    </>
  );
};

export default NewsAndHappeningsPage;
