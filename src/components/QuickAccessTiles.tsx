
import React from 'react';

const QuickAccessTile: React.FC<{ title: string; icon: string; link: string }> = ({ title, icon, link }) => {
  return (
    <a href={link} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </a>
  );
};

const QuickAccessTiles: React.FC = () => {
  const tiles = [
    { title: 'Travel', icon: '✈️', link: '#travel' },
    { title: 'Food', icon: '🍽️', link: '#food' },
    { title: 'Culture', icon: '🎭', link: '#culture' },
    { title: 'Jobs', icon: '💼', link: '#jobs' },
    { title: 'Government Services', icon: '🏛️', link: '#gov-services' },
    { title: 'News', icon: '📰', link: '#news' },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tiles.map((tile) => (
            <QuickAccessTile key={tile.title} {...tile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccessTiles;
