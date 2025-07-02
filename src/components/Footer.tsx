import React from "react";

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
                <a href="#travel" className="hover:text-white">
                  Travel
                </a>
              </li>
              <li className="mb-2">
                <a href="#food" className="hover:text-white">
                  Food
                </a>
              </li>
              <li className="mb-2">
                <a href="#culture" className="hover:text-white">
                  Culture
                </a>
              </li>
              <li className="mb-2">
                <a href="#jobs" className="hover:text-white">
                  Jobs
                </a>
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
          <p>Privacy Policy | Terms & Conditions | FAQ</p>
          <p>
            &copy; {new Date().getFullYear()} Pinas.cc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
