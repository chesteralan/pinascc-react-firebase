import React from "react";
import { Link } from "react-router-dom";

const NationalSymbols: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              NATIONAL IDENTITY
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              NATIONAL SYMBOLS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Discover the significant national symbols of the Philippines and
            their profound meanings. Learn about the emblems that represent the
            nation's heritage and aspirations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/national-symbols/national-symbols-flag"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Philippine Flag"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Flag
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Philippine Flag
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Symbol of Sovereignty
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/national-symbols/national-symbols-anthem"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Lupang Hinirang"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Anthem
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lupang Hinirang
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> National Anthem
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/national-symbols/national-symbols-eagle"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Philippine Eagle"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Bird
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Philippine Eagle
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> National Bird
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/national-symbols/national-symbols-narra-tree"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Narra Tree"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Tree
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Narra Tree
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> National Tree
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/national-symbols/national-symbols-carabao"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Carabao"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Animal
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carabao</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> National Animal
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/culture-and-lifestyle/national-symbols/national-symbols-sampaguita"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Sampaguita"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Flower
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sampaguita
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> National Flower
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NationalSymbols;
