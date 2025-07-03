import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";

const MyAccountSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 pt-32 flex flex-col">
      <h3 className="text-lg font-semibold mb-4">My Account Menu</h3>
      <nav className="space-y-2">
        <Link
          to="/my-account"
          className="flex items-center p-2 hover:bg-gray-200 rounded"
        >
          <FaUser className="mr-2" />
          Profile
        </Link>
        <Link
          to="/my-account/orders"
          className="flex items-center p-2 hover:bg-gray-200 rounded"
        >
          <FaBox className="mr-2" />
          Orders
        </Link>
        <Link
          to="/my-account/settings"
          className="flex items-center p-2 hover:bg-gray-200 rounded"
        >
          <FaCog className="mr-2" />
          Settings
        </Link>
        <Link
          to="/my-account/logout"
          className="flex items-center p-2 hover:bg-gray-200 rounded text-red-500"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default MyAccountSidebar;
