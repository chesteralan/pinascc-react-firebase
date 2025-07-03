import React from "react";
import { Link } from "react-router-dom";

const WeeklyFeaturedRecipes: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              COOKING INSPIRATION
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              WEEKLY FEATURED RECIPES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Discover new and exciting Filipino recipes every week, from
            traditional favorites to modern twists. Perfect for home cooks
            looking to expand their culinary skills.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/food-and-recipes/weekly-featured-recipes/weekly-featured-recipes-classic-chicken-adobo"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Adobo"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Main Dish
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Classic Chicken Adobo
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Filipino Staple
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/food-and-recipes/weekly-featured-recipes/weekly-featured-recipes-pork-sinigang"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Sinigang"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Soup
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pork Sinigang
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Sour & Savory Soup
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/food-and-recipes/weekly-featured-recipes/weekly-featured-recipes-lumpiang-shanghai"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Lumpia"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Appetizer
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lumpiang Shanghai
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Crispy Spring Rolls
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/food-and-recipes/weekly-featured-recipes/weekly-featured-recipes-pancit-canton"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Pancit Canton"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Noodles
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pancit Canton
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Stir-fried Noodles
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/food-and-recipes/weekly-featured-recipes/weekly-featured-recipes-bibingka"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Bibingka"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Dessert
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bibingka</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Christmas Rice Cake
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/food-and-recipes/weekly-featured-recipes/weekly-featured-recipes-halo-halo"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Halo-Halo"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Dessert
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Halo-Halo
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Mixed Ice Dessert
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeeklyFeaturedRecipes;
