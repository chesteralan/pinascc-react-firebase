import React from 'react';
import ProvinceClips from './ProvinceClips';
import FilipinoMythCreatures from './FilipinoMythCreatures';
import HistoryIn60Seconds from './HistoryIn60Seconds';
import HowToBeFilipinoSeries from './HowToBeFilipinoSeries';

const VideoAndVisualsHub: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Video & Visuals Hub</h2>
        <ProvinceClips />
        <FilipinoMythCreatures />
        <HistoryIn60Seconds />
        <HowToBeFilipinoSeries />
      </div>
    </div>
  );
};

export default VideoAndVisualsHub;