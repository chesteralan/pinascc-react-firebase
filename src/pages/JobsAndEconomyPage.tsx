import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const JobsAndEconomyPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">
          Jobs and Economy
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/jobs-and-economy/freelancing-digital-nomadism"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/holiday-bg.jpg"
              alt="Freelancing & Digital Nomadism"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">
              Freelancing & Digital Nomadism
            </h2>
            <p className="text-gray-600">
              Explore opportunities in remote work.
            </p>
          </Link>
          <Link
            to="/jobs-and-economy/job-hunting-tips"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/hero-bg.jpg"
              alt="Job Hunting Tips"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Job Hunting Tips</h2>
            <p className="text-gray-600">Navigate the Philippine job market.</p>
          </Link>
          <Link
            to="/jobs-and-economy/remote-job-boards"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/cta-img.jpg"
              alt="Remote Job Boards"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Remote Job Boards</h2>
            <p className="text-gray-600">
              Discover online platforms for remote work.
            </p>
          </Link>
          <Link
            to="/jobs-and-economy/skills-development"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/images/post-3.jpg"
              alt="Skills Development"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Skills Development</h2>
            <p className="text-gray-600">
              Enhance your professional capabilities.
            </p>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default JobsAndEconomyPage;
