import React from "react";
import { Link } from "react-router-dom";

const OFWGroceryHacks: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              SMART SHOPPING
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              OFW GROCERY HACKS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Tips and tricks for Overseas Filipino Workers to find Filipino
            ingredients and save on groceries abroad. Discover online stores,
            local markets, and budget-friendly options.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/food-and-recipes/ofw-grocery-hacks/ofw-grocery-hacks-asian-markets"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Asian Markets"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Local
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Asian Markets
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Your Go-To Source
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/food-and-recipes/ofw-grocery-hacks/ofw-grocery-hacks-online-filipino-stores"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Online Stores"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Digital
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Online Filipino Stores
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Delivered to Your Door
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/food-and-recipes/ofw-grocery-hacks/ofw-grocery-hacks-diy-ingredients"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="DIY Ingredients"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Homemade
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                DIY Ingredients
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Substitute & Create
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/food-and-recipes/ofw-grocery-hacks/ofw-grocery-hacks-filipino-food-blogs"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Filipino Food Blogs"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Recipes
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Filipino Food Blogs
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Authentic Recipes
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/food-and-recipes/ofw-grocery-hacks/ofw-grocery-hacks-community-gardens"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Community Gardens"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Community
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community Gardens
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Fresh Produce
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/food-and-recipes/ofw-grocery-hacks/ofw-grocery-hacks-budgeting-sales"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Budgeting"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Finance
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Budgeting & Sales
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Smart Saving Tips
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OFWGroceryHacks;
