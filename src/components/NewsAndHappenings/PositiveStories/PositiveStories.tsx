import React from "react";

const PositiveStories: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              INSPIRING TALES
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              POSITIVE STORIES FROM THE PROVINCES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Discover heartwarming and inspiring stories from various provinces
            across the Philippines. Highlighting resilience, community spirit,
            and local achievements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-1.jpg"
              alt="Community Garden"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Community
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bayanihan in Action
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Helping Hands in Crisis
              </div>
            </div>
          </div>

          {/* Card 2 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-2.jpg"
              alt="Local Entrepreneur"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Business
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Local Business Success
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Thriving Amidst Challenges
              </div>
            </div>
          </div>

          {/* Card 3 (Vertical) */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
            <img
              src="/gallery-3.jpg"
              alt="Environmental Initiative"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Environment
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Eco-Tourism Efforts
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Sustainable Practices
              </div>
            </div>
          </div>

          {/* Card 4 (Horizontal - spans below Card 3) */}
          <div className="md:col-start-3 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden md:row-start-2 md:col-span-1 group">
            <div className="flex flex-col md:flex-row">
              <img
                src="/gallery-4.jpg"
                alt="Education Project"
                className="w-full md:w-1/2 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 flex-1">
                <div className="absolute top-4 left-4 md:static md:mb-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  Education
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Youth Empowerment
                </h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span className="mr-1">⭐</span> Scholarship Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositiveStories;
