import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import LiveWeather from "./LiveWeather";
import FilipinoTimeConverter from "./FilipinoTimeConverter";
import NationalHolidaysCalendar from "./NationalHolidaysCalendar";
import BarangayLocator from "./BarangayLocator";
import LanguageTranslator from "./LanguageTranslator";

const PinasNowTools: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          “Pinas Now” Tools
        </h2>
        <CurrencyConverter />
        <LiveWeather />
        <FilipinoTimeConverter />
        <NationalHolidaysCalendar />
        <BarangayLocator />
        <LanguageTranslator />
      </div>
    </div>
  );
};

export default PinasNowTools;
