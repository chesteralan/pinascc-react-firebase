import React from "react";
import SocialFeeds from "./SocialFeeds";
import ForumsAndQA from "./ForumsAndQA";
import FilipinoMemes from "./FilipinoMemes";
import KabayanSpotlight from "./KabayanSpotlight";

const SocialAndCommunity: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Social & Community
        </h2>
        <SocialFeeds />
        <ForumsAndQA />
        <FilipinoMemes />
        <KabayanSpotlight />
      </div>
    </div>
  );
};

export default SocialAndCommunity;
