import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-gray-900 shadow-md`}
    >
      {/* Top Bar */}
      <TopBar scrolled={scrolled} darkMode={darkMode} />

      {/* Main Header */}
      <div
        className={`container mx-auto px-4 py-2 flex justify-between items-center ${darkMode ? "bg-gray-900" : ""}`}
      >
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Pinas.cc" className="h-8" />
          <span
            className={`ml-2 text-xl font-bold ${scrolled ? (darkMode ? "text-white" : "text-gray-800") : "text-white"}`}
          >
            Pinas.cc
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            HOME
          </Link>
          <Link
            to="/discover-philippines"
            className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            DISCOVER PH
          </Link>
          <Link
            to="/culture-lifestyle"
            className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            CULTURE & LIFESTYLE
          </Link>
          <Link
            to="/food-recipes"
            className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            FOOD & RECIPES
          </Link>
          <Link
            to="/news-happenings"
            className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            NEWS & HAPPENINGS
          </Link>
          <Link
            to="/jobs-economy"
            className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            JOBS & ECONOMY
          </Link>
          <div className="relative group">
            <button
              className={`hover:text-gray-500 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
            >
              MORE
            </button>
            <div
              className={`absolute hidden group-hover:block top-full w-48 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-md py-2`}
            >
              <Link
                to="/government-services"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-500"}`}
              >
                GOV'T SERVICES
              </Link>
              <Link
                to="/ofws-balikbayans"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-500"}`}
              >
                FOR OFWS
              </Link>
              <Link
                to="/pinas-now-tools"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-500"}`}
              >
                PINAS NOW TOOLS
              </Link>
              <Link
                to="/video-visuals-hub"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-500"}`}
              >
                VIDEO & VISUALS HUB
              </Link>
              <Link
                to="/social-and-community"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-500"}`}
              >
                SOCIAL & COMMUNITY
              </Link>
              <Link
                to="/my-account"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-500"}`}
              >
                MY ACCOUNT
              </Link>
            </div>
          </div>
        </nav>
        <Link
          to="/contact-us"
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded"
        >
          CONTACT US
        </Link>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
