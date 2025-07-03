import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Hero from "../components/Hero";
import QuickAccessTiles from "../components/QuickAccessTiles";
import KnowThePhilippines from "../components/KnowThePhilippines";
import TodayInPinas from "../components/TodayInPinas";
import TopDestinations from "../components/DiscoverPhilippines/TopDestinations";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={user ? "pt-20" : ""}>
      {!user && <Hero />}
      <QuickAccessTiles />
      <KnowThePhilippines />
      <TodayInPinas />
      <TopDestinations />
      <div className="text-center mb-12">
        <Link
          to="/discover-philippines/top-destinations"
          className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300"
        >
          More Destination
        </Link>
      </div>
      <Newsletter />
    </div>
  );
};

export default HomePage;
