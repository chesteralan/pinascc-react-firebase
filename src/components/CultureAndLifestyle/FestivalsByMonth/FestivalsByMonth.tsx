import React from "react";
import { Link } from "react-router-dom";

const FestivalsByMonth: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              CULTURAL EVENTS
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              FESTIVALS BY MONTH
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Discover the vibrant festivals celebrated across the Philippines
            throughout the year. Plan your visit around these colorful and
            lively cultural events.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/festivals-by-month/festivals-ati-atihan"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Card Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              January
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ati-Atihan Festival
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Kalibo, Aklan
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/festivals-by-month/festivals-panagbenga"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Card Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              February
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Panagbenga Festival
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Baguio City
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/festivals-by-month/festivals-araw-ng-dabaw"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Card Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              March
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Araw ng Dabaw
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Davao City
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/festivals-by-month/festivals-pahiyas"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Card Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              May
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pahiyas Festival
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Lucban, Quezon
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/festivals-by-month/festivals-pintados-kasadyaan"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Card Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              June
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pintados-Kasadyaan Festival
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Tacloban City
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/festivals-by-month/festivals-moriones"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Card Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              April
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Moriones Festival
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Marinduque
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FestivalsByMonth;
