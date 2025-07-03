import React from "react";
import { Link } from "react-router-dom";

const HowToBeFilipinoSeries: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              CULTURAL INSIGHTS
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              "HOW TO BE FILIPINO" SERIES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            A fun and insightful video series exploring the nuances of Filipino
            culture, customs, and etiquette. Learn what it truly means to be
            Filipino, from humor to hospitality.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series/how-to-be-filipino-hospitality"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Filipino Hospitality"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Culture
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Art of Hospitality
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Welcoming Guests
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series/how-to-be-filipino-humor"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Filipino Humor"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Humor
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Understanding Pinoy Humor
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Laughter is the Best Medicine
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series/how-to-be-filipino-family-importance"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Family Values"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Values
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Importance of Family
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Strong Family Ties
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series/how-to-be-filipino-superstitions"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Filipino Superstitions"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Beliefs
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Filipino Superstitions
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Old Wives' Tales
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series/how-to-be-filipino-celebrations"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Filipino Celebrations"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Celebrations
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Filipino Celebrations
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Fiestas & Holidays
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series/how-to-be-filipino-food-etiquette"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Food Culture"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Food
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Filipino Food Etiquette
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Dining Customs
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToBeFilipinoSeries;
