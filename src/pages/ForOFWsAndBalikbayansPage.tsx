import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ForOFWsAndBalikbayansPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">For OFWs and Balikbayans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/for-ofws-and-balikbayans/money-remittance-tips" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Money Remittance Tips</h2>
            <p className="text-gray-600">Tips for sending money home safely.</p>
          </Link>
          <Link to="/for-ofws-and-balikbayans/ofw-rights" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">OFW Rights</h2>
            <p className="text-gray-600">Understand your rights and protections as an OFW.</p>
          </Link>
          <Link to="/for-ofws-and-balikbayans/pinas-feels" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Pinas Feels</h2>
            <p className="text-gray-600">Content to help ease homesickness.</p>
          </Link>
          <Link to="/for-ofws-and-balikbayans/support-networks-abroad" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Support Networks Abroad</h2>
            <p className="text-gray-600">Connect with Filipino communities worldwide.</p>
          </Link>
          <Link to="/for-ofws-and-balikbayans/travel-requirements" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Travel Requirements</h2>
            <p className="text-gray-600">Latest travel requirements to and from the Philippines.</p>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ForOFWsAndBalikbayansPage;
