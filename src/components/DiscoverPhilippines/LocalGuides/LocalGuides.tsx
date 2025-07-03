import React from "react";
import { Link } from "react-router-dom";

const LocalGuides: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              EXPERT ADVICE
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              LOCAL GUIDES & ITINERARIES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Get insider tips and curated itineraries from local experts. Explore
            the Philippines like a true local with these personalized guides.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/discover-philippines/local-guides/local-guides-el-nido-coron"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Palawan Guide"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Palawan
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                El Nido & Coron
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> 5-Day Itinerary
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/discover-philippines/local-guides/local-guides-south-cebu"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Cebu Guide"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Cebu
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                South Cebu Adventure
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Waterfalls & Canyoning
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/discover-philippines/local-guides/local-guides-baguio"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Baguio Guide"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Baguio
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Summer Capital Escape
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Cool Climate & Culture
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/discover-philippines/local-guides/local-guides-batanes"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Batanes Guide"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Batanes
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Northern Charm
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Rolling Hills & Stone Houses
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/discover-philippines/local-guides/local-guides-davao"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Davao Guide"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Davao
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                King City of the South
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Durian & Mount Apo
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/discover-philippines/local-guides/local-guides-siargao"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Siargao Guide"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Siargao
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Surfing & Island Hopping
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> 3-Day Adventure
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalGuides;
