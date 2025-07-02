import React from "react";

const TodayInPinas: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Today in Pinas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Weather</h3>
            <p className="text-gray-600">Manila: 32°C, Sunny</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Currency</h3>
            <p className="text-gray-600">1 USD = 58.50 PHP</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Holidays</h3>
            <p className="text-gray-600">July 1, 2025: Eid al-Adha</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Trending</h3>
            <p className="text-gray-600">#PinasTourism</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayInPinas;
