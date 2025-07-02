import React from 'react';
import RemoteJobBoards from './RemoteJobBoards';
import JobHuntingTips from './JobHuntingTips';
import SkillsDevelopment from './SkillsDevelopment';
import FreelancingDigitalNomadism from './FreelancingDigitalNomadism';

const JobsAndEconomy: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Jobs & Economy</h2>
        <RemoteJobBoards />
        <JobHuntingTips />
        <SkillsDevelopment />
        <FreelancingDigitalNomadism />
      </div>
    </div>
  );
};

export default JobsAndEconomy;