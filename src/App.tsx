import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickAccessTiles from "./components/QuickAccessTiles";
import KnowThePhilippines from "./components/KnowThePhilippines";
import TodayInPinas from "./components/TodayInPinas";
import DiscoverPhilippines from "./components/DiscoverPhilippines";
import CultureAndLifestyle from "./components/CultureAndLifestyle";
import FoodAndRecipes from "./components/FoodAndRecipes";
import NewsAndHappenings from "./components/NewsAndHappenings";
import JobsAndEconomy from "./components/JobsAndEconomy";
import GovtServicesSimplified from "./components/GovtServicesSimplified";
import ForOFWsAndBalikbayans from "./components/ForOFWsAndBalikbayans";
import PinasNowTools from "./components/PinasNowTools";
import VideoAndVisualsHub from "./components/VideoAndVisualsHub";
import Newsletter from "./components/Newsletter";
import SocialAndCommunity from "./components/SocialAndCommunity";
import Footer from "./components/Footer";
import TopDestinations from "./components/DiscoverPhilippines/TopDestinations";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <QuickAccessTiles />
      <KnowThePhilippines />
      <TodayInPinas />
      <DiscoverPhilippines />
      <CultureAndLifestyle />
      <FoodAndRecipes />
      <NewsAndHappenings />
      <JobsAndEconomy />
      <GovtServicesSimplified />
      <ForOFWsAndBalikbayans />
      <PinasNowTools />
      <VideoAndVisualsHub />
      <Newsletter />
      <SocialAndCommunity />
      <TopDestinations />
      <Footer />
    </div>
  );
};

export default App;
