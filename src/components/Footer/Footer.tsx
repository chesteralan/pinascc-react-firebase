import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ABOUT PINAS.CC</h3>
            <p className="text-gray-400">
              Your gateway to the Philippines. Informing, representing, and
              serving locals, OFWs, and foreigners.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT INFORMATION</h3>
            <ul className="text-gray-400">
              <li className="mb-2">+01 (977) 2599 12</li>
              <li className="mb-2">info@pinas.cc</li>
              <li className="mb-2">Philippines</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">QUICK LINKS</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/discover-philippines" className="hover:text-white">
                  Travel
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/food-recipes" className="hover:text-white">
                  Food
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/culture-lifestyle" className="hover:text-white">
                  Culture
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/jobs-economy" className="hover:text-white">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg w-full text-gray-800"
              />
              <button className="bg-red-500 text-white p-2 rounded-r-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms-and-conditions" className="hover:text-white">
              {" "}
              Terms & Conditions
            </Link>{" "}
            |
            <Link to="/faq" className="hover:text-white">
              {" "}
              FAQ
            </Link>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Pinas.cc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
