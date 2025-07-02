import React from "react";
import NationalHeadlines from "./NationalHeadlines";
import LocalGovAnnouncements from "./LocalGovAnnouncements";
import BusinessAndTech from "./BusinessAndTech";
import PositiveStories from "./PositiveStories";

const NewsAndHappenings: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          News & Happenings
        </h2>
        <NationalHeadlines />
        <LocalGovAnnouncements />
        <BusinessAndTech />
        <PositiveStories />
      </div>
    </div>
  );
};

export default NewsAndHappenings;
