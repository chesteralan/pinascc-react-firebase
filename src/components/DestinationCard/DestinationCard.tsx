import React from 'react';

interface DestinationCardProps {
  country: string;
  city: string;
  image: string;
  rating: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ country, city, image, rating }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={city} className="w-full h-64 object-cover" />
      <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        {country}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-xl font-bold">{city}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
