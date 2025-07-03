import React from "react";
import { Link } from "react-router-dom";

const MustTryStreetFoods: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              SAVORY BITES
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              MUST-TRY STREET FOODS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Dive into the vibrant world of Filipino street food, a culinary
            adventure on every corner. From savory to sweet, experience
            authentic local flavors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/food-and-recipes/must-try-street-foods/must-try-street-foods-kwek-kwek"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Kwek-Kwek"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Fried
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kwek-Kwek
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Orange Battered Quail Eggs
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/food-and-recipes/must-try-street-foods/must-try-street-foods-isaw"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Isaw"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Grilled
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Isaw</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Grilled Pork Intestines
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/food-and-recipes/must-try-street-foods/must-try-street-foods-fishball"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Fishball"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Snack
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fishball</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Popular Street Snack
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/food-and-recipes/must-try-street-foods/must-try-street-foods-balut"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Balut"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Exotic
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Balut</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Fertilized Duck Egg
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/food-and-recipes/must-try-street-foods/must-try-street-foods-proben"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Proben"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Fried
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proben</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Fried Chicken Proventriculus
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/food-and-recipes/must-try-street-foods/must-try-street-foods-taho"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Taho"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Sweet
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Taho</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Sweet Tofu with Sago
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MustTryStreetFoods;
