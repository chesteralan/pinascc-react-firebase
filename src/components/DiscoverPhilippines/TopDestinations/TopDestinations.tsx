import React from "react";
import DestinationCard from "./DestinationCard";

const TopDestinations: React.FC = () => {
  const destinations = [
    {
      country: "PHILIPPINES",
      city: "Boracay",
      image: "/dest-boracay.jpg",
      rating: 5,
    },
    {
      country: "PHILIPPINES",
      city: "Palawan",
      image: "/dest-palawan.jpg",
      rating: 5,
    },
    {
      country: "PHILIPPINES",
      city: "Siargao",
      image: "/dest-siargao.jpg",
      rating: 4,
    },
    {
      country: "PHILIPPINES",
      city: "Banaue",
      image: "/dest-banaue.jpg",
      rating: 5,
    },
    {
      country: "PHILIPPINES",
      city: "Cebu",
      image: "/dest-1.jpg",
      rating: 4,
    },
    {
      country: "PHILIPPINES",
      city: "Baguio",
      image: "/dest-2.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase text-blue-600 mb-2">
              FEATURED DESTINATIONS
            </p>
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">
              TOP DESTINATIONS IN THE PHILIPPINES
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-md text-right leading-relaxed">
            Explore the most breathtaking and popular travel spots across the
            Philippines. From pristine beaches to lush mountains, discover your
            next adventure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DestinationCard {...destinations[0]} />
          <DestinationCard {...destinations[1]} />
          <DestinationCard {...destinations[2]} />
          <DestinationCard {...destinations[3]} />
          <DestinationCard {...destinations[4]} />
          <DestinationCard {...destinations[5]} />
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
