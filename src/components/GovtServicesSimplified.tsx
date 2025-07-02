import React from 'react';
import PassportVisaGuides from './PassportVisaGuides';
import GovtHelpSections from './GovtHelpSections';
import StepByStepGuides from './StepByStepGuides';
import HotlineDirectory from './HotlineDirectory';

const GovtServicesSimplified: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gov't Services Simplified</h2>
        <PassportVisaGuides />
        <GovtHelpSections />
        <StepByStepGuides />
        <HotlineDirectory />
      </div>
    </div>
  );
};

export default GovtServicesSimplified;