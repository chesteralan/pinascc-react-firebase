import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? (darkMode ? "bg-gray-800 shadow-md" : "bg-white shadow-md") : "bg-transparent"}`}
    >
      {/* Top Bar */}
      <div
        className={`text-sm py-2 ${scrolled ? "hidden" : "block"} ${darkMode ? "bg-gray-900 text-white" : "bg-gray-700 text-white"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📞 +01 (977) 2599 12</span>
            <span>✉️ info@pinas.cc</span>
            <span>📍 Philippines</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              f
            </a>
            <a href="#" className="hover:text-gray-300">
              t
            </a>
            <a href="#" className="hover:text-gray-300">
              i
            </a>
            <a href="#" className="hover:text-gray-300">
              in
            </a>
            <a href="#" className="hover:text-gray-300">
              🔍
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`container mx-auto px-4 py-2 flex justify-between items-center ${darkMode ? "bg-gray-900" : ""}`}
      >
        <div className="flex items-center">
          <img src="/logo.png" alt="Pinas.cc" className="h-8" />
          <span
            className={`ml-2 text-xl font-bold ${scrolled ? (darkMode ? "text-white" : "text-gray-800") : "text-white"}`}
          >
            Pinas.cc
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className={`hover:text-gray-800 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            HOME
          </Link>
          <Link
            to="/discover-philippines"
            className={`hover:text-gray-800 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            DISCOVER PH
          </Link>
          <Link
            to="/culture-lifestyle"
            className={`hover:text-gray-800 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            CULTURE & LIFESTYLE
          </Link>
          <Link
            to="/food-recipes"
            className={`hover:text-gray-800 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            FOOD & RECIPES
          </Link>
          <Link
            to="/news-happenings"
            className={`hover:text-gray-800 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
          >
            NEWS & HAPPENINGS
          </Link>
          <div className="relative group">
            <button
              className={`hover:text-gray-800 ${scrolled ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-white"}`}
            >
              MORE
            </button>
            <div
              className={`absolute hidden group-hover:block top-full w-48 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-md py-2`}
            >
              <Link
                to="/jobs-economy"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                JOBS & ECONOMY
              </Link>
              <Link
                to="/govt-services"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                GOV'T SERVICES
              </Link>
              <Link
                to="/ofws-balikbayans"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                FOR OFWS
              </Link>
              <Link
                to="/pinas-now-tools"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                PINAS NOW TOOLS
              </Link>
              <Link
                to="/video-visuals-hub"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                VIDEO & VISUALS HUB
              </Link>
              <Link
                to="/social-and-community"
                className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                SOCIAL & COMMUNITY
              </Link>
            </div>
          </div>
        </nav>
        <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded">
          CONTACT US
        </button>
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
