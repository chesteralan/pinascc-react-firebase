import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const VideoAndVisualsHubPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">
          Video and Visuals Hub
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/video-and-visuals-hub/filipino-myth-creatures"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Filipino Myth Creatures & Folklore"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              Filipino Myth Creatures & Folklore
            </h2>
            <p className="text-gray-600">
              Explore mythical creatures and folklore.
            </p>
          </Link>
          <Link
            to="/video-and-visuals-hub/history-in-60-seconds"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="History in 60 Seconds"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">History in 60 Seconds</h2>
            <p className="text-gray-600">
              Learn Philippine history through short clips.
            </p>
          </Link>
          <Link
            to="/video-and-visuals-hub/how-to-be-filipino-series"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-3.jpg"
              alt='"How to be Filipino" Series'
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              "How to be Filipino" Series
            </h2>
            <p className="text-gray-600">
              A fun and insightful video series on Filipino culture.
            </p>
          </Link>
          <Link
            to="/video-and-visuals-hub/province-clips"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Province Clips"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Province Clips</h2>
            <p className="text-gray-600">
              Discover the unique charm of each Philippine province.
            </p>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default VideoAndVisualsHubPage;
