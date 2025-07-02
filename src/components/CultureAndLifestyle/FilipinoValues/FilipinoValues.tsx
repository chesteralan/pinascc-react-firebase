import React from "react";

const FilipinoValues: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              CORE PRINCIPLES
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              FILIPINO VALUES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Understand the fundamental values that shape Filipino society and
            individual character. Explore concepts like 'pakikisama', 'utang na
            loob', and family ties.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-1.jpg"
              alt="Family Solidarity"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Family
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Family Solidarity
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Strong Family Ties
              </div>
            </div>
          </div>

          {/* Card 2 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-2.jpg"
              alt="Pakikisama"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Social
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pakikisama
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Smooth Interpersonal Relations
              </div>
            </div>
          </div>

          {/* Card 3 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-3.jpg"
              alt="Utang na Loob"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Reciprocity
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Utang na Loob
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Debt of Gratitude
              </div>
            </div>
          </div>

          {/* Card 4 (Horizontal - spans below Card 3) */}
          <div className="md:col-start-3 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden md:row-start-2 md:col-span-1 group">
            <div className="flex flex-col md:flex-row">
              <img
                src="/gallery-4.jpg"
                alt="Hospitality"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 flex-1">
                <div className="absolute top-4 left-4 md:static md:mb-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  Trait
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Hospitality
                </h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span className="mr-1">⭐</span> Warm Welcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilipinoValues;
