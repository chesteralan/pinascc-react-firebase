import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const DiscoverPhilippinesPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">
          Discover Philippines
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/discover-philippines/best-travel-months"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/dest-1.jpg"
              alt="Best Travel Months"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Best Travel Months</h2>
            <p className="text-gray-600">Find the ideal time to visit.</p>
          </Link>
          <Link
            to="/discover-philippines/hidden-gems"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/dest-2.jpg"
              alt="Hidden Gems"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Hidden Gems</h2>
            <p className="text-gray-600">
              Uncover the Philippines' best-kept secrets.
            </p>
          </Link>
          <Link
            to="/discover-philippines/interactive-map"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/dest-3.jpg"
              alt="Interactive Map"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Interactive Map</h2>
            <p className="text-gray-600">Navigate through the provinces.</p>
          </Link>
          <Link
            to="/discover-philippines/local-guides"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/dest-4.jpg"
              alt="Local Guides"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              Local Guides / Itineraries
            </h2>
            <p className="text-gray-600">
              Get insider tips and curated itineraries.
            </p>
          </Link>
          <Link
            to="/discover-philippines/top-destinations"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/dest-boracay.jpg"
              alt="Top Destinations"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Top Destinations</h2>
            <p className="text-gray-600">
              Explore the most breathtaking travel spots.
            </p>
          </Link>
          <Link
            to="/discover-philippines/visa-info"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/dest-palawan.jpg"
              alt="Visa Info"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              Visa Info, Entry Requirements
            </h2>
            <p className="text-gray-600">
              Stay informed about visa regulations.
            </p>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default DiscoverPhilippinesPage;
