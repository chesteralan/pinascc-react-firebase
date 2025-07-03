import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "../../firebase";

interface TopBarProps {
  scrolled: boolean;
  darkMode: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ scrolled, darkMode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
          {user ? (
            <>
              <span className="text-white">Hello, {user.email}</span>
              <button onClick={handleSignOut} className="hover:text-gray-500">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-500">
                Sign In
              </Link>
              <Link to="/register" className="hover:text-gray-500">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
