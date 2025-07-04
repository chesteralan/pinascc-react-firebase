import React from "react";
import { Link } from "react-router-dom";

const HistoryIn60Seconds: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              QUICK LEARNING
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              HISTORY IN 60 SECONDS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Explore key moments in Philippine history through concise and
            engaging video shorts. Learn about significant events and figures in
            just one minute.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds/history-in-60-seconds-arrival-of-magellan"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Magellan"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Discovery
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Arrival of Magellan
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> 1521
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds/history-in-60-seconds-jose-rizal-execution"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Rizal"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Hero
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jose Rizal's Execution
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> 1896
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds/history-in-60-seconds-edsa-people-power"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="EDSA"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Revolution
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                EDSA People Power
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> 1986
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds/history-in-60-seconds-battle-of-mactan"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Battle of Mactan"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Battle
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Battle of Mactan
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Lapu-Lapu's Victory
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds/history-in-60-seconds-philippine-american-war"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Philippine-American War"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              War
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Philippine-American War
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> First Republic
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds/history-in-60-seconds-philippine-independence"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Philippine Independence"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Independence
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Philippine Independence
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> June 12, 1898
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HistoryIn60Seconds;
