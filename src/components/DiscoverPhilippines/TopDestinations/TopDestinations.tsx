import React from "react";
import DestinationCard from "./DestinationCard";

const TopDestinations: React.FC = () => {
  const destinations = [
    {
      country: "THAILAND",
      city: "Disney Land",
      image: "/dest-boracay.jpg",
      rating: 5,
    },
    {
      country: "NORWAY",
      city: "Besseggen Ridge",
      image: "/dest-palawan.jpg",
      rating: 5,
    },
    {
      country: "NEW ZEALAND",
      city: "Oxolotan City",
      image: "/dest-siargao.jpg",
      rating: 4,
    },
    {
      country: "SINGAPORE",
      city: "Marina Bay Sand City",
      image: "/dest-banaue.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <p className="text-red-500 uppercase text-sm font-bold mb-2 relative before:content-[''] before:absolute before:w-8 before:h-0.5 before:bg-red-500 before:left-0 before:top-1/2 before:-translate-x-full before:mr-2">
              Popular Destination
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Top Notch Destination
            </h2>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2 text-center md:text-left">
            Aperiam sociosqu urna praesent, tristique, corrupti condimentum
            asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas
            provident laoreet nesciunt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-2">
            <DestinationCard {...destinations[0]} />
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <DestinationCard {...destinations[1]} />
          </div>
          <div className="md:col-span-1 lg:col-span-1 grid grid-rows-2 gap-6">
            <DestinationCard {...destinations[2]} />
            <DestinationCard {...destinations[3]} />
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300">
            More Destination
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
