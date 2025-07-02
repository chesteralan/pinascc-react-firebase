import React from "react";

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
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-1.jpg"
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
          </div>

          {/* Card 2 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-2.jpg"
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
          </div>

          {/* Card 3 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-3.jpg"
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
          </div>

          {/* Card 4 (Horizontal - spans below Card 3) */}
          <div className="md:col-start-3 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden md:row-start-2 md:col-span-1 group">
            <div className="flex flex-col md:flex-row">
              <img
                src="/gallery-4.jpg"
                alt="Taho"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 flex-1">
                <div className="absolute top-4 left-4 md:static md:mb-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  Sweet
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Taho</h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span className="mr-1">⭐</span> Sweet Tofu with Sago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MustTryStreetFoods;
