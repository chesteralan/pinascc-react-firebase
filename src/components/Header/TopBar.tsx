import React from "react";

interface TopBarProps {
  scrolled: boolean;
  darkMode: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ scrolled, darkMode }) => {
  return (
    <div
      className={`text-sm py-2 ${scrolled ? "hidden" : "block"} ${darkMode ? "bg-gray-800 text-white" : "bg-gray-700 text-white"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>📞 +01 (977) 2599 12</span>
          <span>✉️ info@pinas.cc</span>
          <span>📍 Philippines</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-500">
            f
          </a>
          <a href="#" className="hover:text-gray-500">
            t
          </a>
          <a href="#" className="hover:text-gray-500">
            i
          </a>
          <a href="#" className="hover:text-gray-500">
            in
          </a>
          <a href="#" className="hover:text-gray-500">
            🔍
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
