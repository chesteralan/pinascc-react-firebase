import React from "react";
import { Link } from "react-router-dom";

const TopRegionalDishes: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              CULINARY JOURNEY
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              TOP REGIONAL DISHES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Embark on a gastronomic adventure through the Philippines' diverse
            regional cuisines. Each dish tells a story of local ingredients and
            culinary traditions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/food-and-recipes/top-regional-dishes/top-regional-dishes-bicol-express"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Bicol Express"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Bicol
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bicol Express
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Spicy & Creamy
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/food-and-recipes/top-regional-dishes/top-regional-dishes-la-paz-batchoy"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="La Paz Batchoy"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Iloilo
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                La Paz Batchoy
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Noodle Soup Delight
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/food-and-recipes/top-regional-dishes/top-regional-dishes-sinuglaw"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Sinuglaw"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Mindanao
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sinuglaw</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Grilled Pork & Kinilaw
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/food-and-recipes/top-regional-dishes/top-regional-dishes-kinilaw"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Kinilaw"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Visayas
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kinilaw</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Filipino Ceviche
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/food-and-recipes/top-regional-dishes/top-regional-dishes-pinakbet"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Pinakbet"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Ilocos
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pinakbet</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Mixed Vegetables with Bagoong
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/food-and-recipes/top-regional-dishes/top-regional-dishes-pancit-malabon"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Pancit Malabon"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Luzon
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pancit Malabon
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Seafood Noodle Dish
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRegionalDishes;
