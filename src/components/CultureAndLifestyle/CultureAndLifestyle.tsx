import React from "react";
import FilipinoTraditions from "./FilipinoTraditions";
import FestivalsByMonth from "./FestivalsByMonth";
import FilipinoValues from "./FilipinoValues";
import CommonPhrases from "./CommonPhrases";
import NationalSymbols from "./NationalSymbols";
import FilipinoFashion from "./FilipinoFashion";

const CultureAndLifestyle: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Culture & Lifestyle
        </h2>
        <FilipinoTraditions />
        <FestivalsByMonth />
        <FilipinoValues />
        <CommonPhrases />
        <NationalSymbols />
        <FilipinoFashion />
      </div>
    </div>
  );
};

export default CultureAndLifestyle;
