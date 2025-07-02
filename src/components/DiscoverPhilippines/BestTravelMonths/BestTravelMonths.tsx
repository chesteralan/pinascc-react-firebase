import React from "react";

const BestTravelMonths: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              PLAN YOUR TRIP
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              BEST TRAVEL MONTHS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Find the ideal time to visit different regions of the Philippines for the best weather and experiences.
            Avoid typhoon season and enjoy sunny days.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img src="/gallery-1.jpg" alt="Luzon" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Luzon
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">November - May</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Dry Season
              </div>
            </div>
          </div>

          {/* Card 2 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img src="/gallery-2.jpg" alt="Visayas" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Visayas
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">December - May</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Peak Season
              </div>
            </div>
          </div>

          {/* Card 3 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img src="/gallery-3.jpg" alt="Mindanao" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Mindanao
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">March - October</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Less Rain
              </div>
            </div>
          </div>

          {/* Card 4 (Horizontal - spans below Card 3) */}
          <div className="md:col-start-3 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden md:row-start-2 md:col-span-1 group">
            <div className="flex flex-col md:flex-row">
              <img src="/gallery-4.jpg" alt="Overall" className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6 flex-1">
                <div className="absolute top-4 left-4 md:static md:mb-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  Overall
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">December - February</h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span className="mr-1">⭐</span> Cool & Dry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestTravelMonths;
