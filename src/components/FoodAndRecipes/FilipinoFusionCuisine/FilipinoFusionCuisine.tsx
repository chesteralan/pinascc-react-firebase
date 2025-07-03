import React from "react";
import { Link } from "react-router-dom";

const FilipinoFusionCuisine: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              CULINARY INNOVATION
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              FILIPINO FUSION CUISINE
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Explore the exciting world of Filipino fusion cuisine, where
            traditional flavors meet global influences. Discover innovative
            dishes that redefine Filipino gastronomy.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/food-and-recipes/filipino-fusion-cuisine/filipino-fusion-cuisine-adobo-tacos"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Adobo Tacos"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Mexican-Filipino
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Adobo Tacos
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> A Savory Twist
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/food-and-recipes/filipino-fusion-cuisine/filipino-fusion-cuisine-sinigang-ramen"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Sinigang Ramen"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Japanese-Filipino
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sinigang Ramen
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Sour & Umami
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/food-and-recipes/filipino-fusion-cuisine/filipino-fusion-cuisine-ube-cheesecake"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Ube Cheesecake"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Dessert
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ube Cheesecake
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Sweet & Creamy
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/food-and-recipes/filipino-fusion-cuisine/filipino-fusion-cuisine-adobo-pizza"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Adobo Pizza"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Italian-Filipino
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Adobo Pizza
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Savory Fusion
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/food-and-recipes/filipino-fusion-cuisine/filipino-fusion-cuisine-buko-pandan-panna-cotta"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Buko Pandan Panna Cotta"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Dessert
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Buko Pandan Panna Cotta
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Tropical Delight
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/food-and-recipes/filipino-fusion-cuisine/filipino-fusion-cuisine-sisig-pizza"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Sisig Pizza"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Italian-Filipino
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sisig Pizza
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Crispy & Savory
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FilipinoFusionCuisine;
