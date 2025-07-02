import React from 'react';
import TravelRequirements from './TravelRequirements';
import MoneyRemittanceTips from './MoneyRemittanceTips';
import OFWRights from './OFWRights';
import SupportNetworksAbroad from './SupportNetworksAbroad';
import PinasFeels from './PinasFeels';

const ForOFWsAndBalikbayans: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">For OFWs & Balikbayans</h2>
        <TravelRequirements />
        <MoneyRemittanceTips />
        <OFWRights />
        <SupportNetworksAbroad />
        <PinasFeels />
      </div>
    </div>
  );
};

export default ForOFWsAndBalikbayans;