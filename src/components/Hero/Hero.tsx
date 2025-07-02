import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="flex-grow flex flex-col justify-center items-center text-white pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          YOUR GATEWAY TO THE PHILIPPINES
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Discover the vibrant culture, stunning landscapes, and essential
          services for locals, OFWs, and foreigners.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full">
          EXPLORE NOW
        </button>
      </div>
      {/* The booking form is removed as per the new site plan */}
    </div>
  );
};

export default Hero;
