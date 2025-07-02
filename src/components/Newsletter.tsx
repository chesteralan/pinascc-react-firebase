
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-600 mb-8">Get the latest updates on PH trends, culture, and travel tips.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Your email" className="p-3 rounded-l-lg w-64 text-gray-800" />
          <button className="bg-red-500 text-white p-3 rounded-r-lg">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
