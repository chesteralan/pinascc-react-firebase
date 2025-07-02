import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const CultureAndLifestylePage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">
          Culture and Lifestyle
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/culture-and-lifestyle/common-phrases"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Common Phrases"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Common Phrases</h2>
            <p className="text-gray-600">Learn essential Filipino phrases.</p>
          </Link>
          <Link
            to="/culture-and-lifestyle/festivals-by-month"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Festivals by Month"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Festivals by Month</h2>
            <p className="text-gray-600">
              Discover vibrant Filipino festivals.
            </p>
          </Link>
          <Link
            to="/culture-and-lifestyle/filipino-fashion"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Filipino Fashion"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Filipino Fashion</h2>
            <p className="text-gray-600">
              Explore traditional and modern Filipino attire.
            </p>
          </Link>
          <Link
            to="/culture-and-lifestyle/filipino-traditions"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Filipino Traditions"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Filipino Traditions</h2>
            <p className="text-gray-600">
              Understand Filipino customs and traditions.
            </p>
          </Link>
          <Link
            to="/culture-and-lifestyle/filipino-values"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Filipino Values"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Filipino Values</h2>
            <p className="text-gray-600">
              Learn about core Filipino values and humor.
            </p>
          </Link>
          <Link
            to="/culture-and-lifestyle/national-symbols"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="National Symbols"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">National Symbols</h2>
            <p className="text-gray-600">
              Discover the symbols of the Philippines.
            </p>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default CultureAndLifestylePage;
