import React from "react";
import { Link } from "react-router-dom";

const HiddenGems: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              OFF-THE-BEATEN-PATH
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              HIDDEN GEMS
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Uncover the Philippines' best-kept secrets, from secluded beaches to
            pristine waterfalls. Experience unique adventures away from the
            usual tourist crowds.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Vertical) */}
          <Link
            to="/discover-philippines/hidden-gems/hidden-gems-siquijor"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Siquijor"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Island
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Siquijor</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Mystical Island
              </div>
            </div>
          </Link>

          {/* Card 2 (Vertical) */}
          <Link
            to="/discover-philippines/hidden-gems/hidden-gems-biri-rock-formations"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Biri Rock Formations"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Natural Wonder
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Biri Rock Formations
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Northern Samar
              </div>
            </div>
          </Link>

          {/* Card 3 (Vertical) */}
          <Link
            to="/discover-philippines/hidden-gems/hidden-gems-tinuy-an-falls"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Tinuy-an Falls"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Waterfall
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tinuy-an Falls
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Bislig, Surigao del Sur
              </div>
            </div>
          </Link>

          {/* Card 5 (Vertical) */}
          <Link
            to="/discover-philippines/hidden-gems/hidden-gems-malapascua-island"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Malapascua Island"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Island
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Malapascua Island
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Thresher Shark Diving
              </div>
            </div>
          </Link>

          {/* Card 6 (Vertical) */}
          <Link
            to="/discover-philippines/hidden-gems/hidden-gems-cabugao-gamay-island"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-6.jpg"
              alt="Cabugao Gamay Island"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Island
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cabugao Gamay Island
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Gigantes Islands
              </div>
            </div>
          </Link>

          {/* Card 4 (Vertical) */}
          <Link
            to="/discover-philippines/hidden-gems/hidden-gems-mount-pinatubo"
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group block"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Mount Pinatubo"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              Volcano
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mount Pinatubo
              </h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <span className="mr-1">⭐</span> Crater Lake Trek
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HiddenGems;
