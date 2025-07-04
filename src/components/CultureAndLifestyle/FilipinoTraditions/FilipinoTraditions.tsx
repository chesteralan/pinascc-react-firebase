import React from "react";
import { Link } from "react-router-dom";

const FilipinoTraditions: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              HERITAGE & CUSTOMS
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              FILIPINO TRADITIONS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Delve into the rich tapestry of Filipino traditions and customs that
            shape daily life. Understand the values and practices passed down
            through generations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/filipino-traditions/traditions-bayanihan"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Bayanihan"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Community
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bayanihan
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Spirit of Unity
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/filipino-traditions/traditions-pagmamano"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Pagmamano"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Respect
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pagmamano
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Honoring Elders
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/filipino-traditions/traditions-fiestas"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Fiestas"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Celebration
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fiestas</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Town Celebrations
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/filipino-traditions/traditions-pamanhikan"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Pamanhikan"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Marriage
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pamanhikan
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Traditional Courtship
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/filipino-traditions/traditions-simbang-gabi"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Simbang Gabi"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Christmas
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Simbang Gabi
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Dawn Masses
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/filipino-traditions/traditions-harana"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Harana"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Courtship
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Harana</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Traditional Serenade
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FilipinoTraditions;
