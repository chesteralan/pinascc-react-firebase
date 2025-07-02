import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const PinasNowToolsPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">Pinas Now Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/pinas-now-tools/barangay-locator"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Barangay Locator"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              Barangay Locator / Zip Code Search
            </h2>
            <p className="text-gray-600">
              Locate barangays and search zip codes.
            </p>
          </Link>
          <Link
            to="/pinas-now-tools/currency-converter"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Currency Converter"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Currency Converter</h2>
            <p className="text-gray-600">
              Convert currencies with real-time exchange rates.
            </p>
          </Link>
          <Link
            to="/pinas-now-tools/filipino-time-converter"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Filipino Time Converter"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Filipino Time Converter</h2>
            <p className="text-gray-600">
              Convert time zones to Philippine Standard Time.
            </p>
          </Link>
          <Link
            to="/pinas-now-tools/language-translator"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Language Translator"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Language Translator</h2>
            <p className="text-gray-600">
              Translate between Tagalog, Bisaya, and English.
            </p>
          </Link>
          <Link
            to="/pinas-now-tools/live-weather"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Live Weather"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Live Weather</h2>
            <p className="text-gray-600">
              Get real-time weather updates for major cities.
            </p>
          </Link>
          <Link
            to="/pinas-now-tools/national-holidays-calendar"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="National Holidays Calendar"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              National Holidays Calendar
            </h2>
            <p className="text-gray-600">
              View official list of national holidays.
            </p>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default PinasNowToolsPage;
