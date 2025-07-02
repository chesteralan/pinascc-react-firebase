import React from "react";
import InteractiveMap from "./InteractiveMap";
import TopDestinations from "./TopDestinations";
import HiddenGems from "./HiddenGems";
import BestTravelMonths from "./BestTravelMonths";
import LocalGuides from "./LocalGuides";
import VisaInfo from "./VisaInfo";

const DiscoverPhilippines: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Discover Philippines
        </h2>
        <InteractiveMap />
        <TopDestinations />
        <HiddenGems />
        <BestTravelMonths />
        <LocalGuides />
        <VisaInfo />
      </div>
    </div>
  );
};

export default DiscoverPhilippines;
