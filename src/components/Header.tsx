
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className={`bg-gray-700 text-white text-sm py-2 ${scrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📞 +01 (977) 2599 12</span>
            <span>✉️ info@pinas.cc</span>
            <span>📍 Philippines</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">f</a>
            <a href="#" className="hover:text-gray-300">t</a>
            <a href="#" className="hover:text-gray-300">i</a>
            <a href="#" className="hover:text-gray-300">in</a>
            <a href="#" className="hover:text-gray-300">🔍</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Pinas.cc" className="h-8" />
          <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>Pinas.cc</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>HOME</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>DISCOVER PH</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>CULTURE & LIFESTYLE</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>FOOD & RECIPES</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>NEWS & HAPPENINGS</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>JOBS & ECONOMY</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>GOV'T SERVICES</a>
          <a href="#" className={`hover:text-gray-800 ${scrolled ? 'text-gray-600' : 'text-white'}`}>FOR OFWS</a>
        </nav>
        <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded">CONTACT US</button>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
