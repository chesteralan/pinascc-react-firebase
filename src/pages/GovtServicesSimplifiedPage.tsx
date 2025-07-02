import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const GovtServicesSimplifiedPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">
          Government Services Simplified
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/government-services/govt-help-sections"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/post-1.jpg"
              alt="Government Help Sections"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Government Help Sections</h2>
            <p className="text-gray-600">
              Guides for NBI, PhilHealth, SSS, PAG-IBIG.
            </p>
          </Link>
          <Link
            to="/government-services/hotline-directory"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/post-2.jpg"
              alt="Hotline Directory"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Hotline Directory</h2>
            <p className="text-gray-600">
              Essential hotlines for emergencies and services.
            </p>
          </Link>
          <Link
            to="/government-services/passport-visa-guides"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/post-3.jpg"
              alt="Passport & Visa Guides"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Passport & Visa Guides</h2>
            <p className="text-gray-600">
              Comprehensive guides for passport and visa applications.
            </p>
          </Link>
          <Link
            to="/government-services/step-by-step-guides"
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            <img
              src="/cta-img.jpg"
              alt="Step-by-Step Guides"
              className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">Step-by-Step Guides</h2>
            <p className="text-gray-600">
              Visual guides and downloadable PDFs for government processes.
            </p>
          </Link>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default GovtServicesSimplifiedPage;
