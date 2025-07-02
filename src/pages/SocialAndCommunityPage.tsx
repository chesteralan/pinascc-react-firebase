import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const SocialAndCommunityPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">Social and Community</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/social-and-community/filipino-memes" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Filipino Memes & Viral Moments</h2>
            <p className="text-gray-600">Explore the funniest and most viral Filipino memes.</p>
          </Link>
          <Link to="/social-and-community/forums-and-qa" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Forums / Q&A</h2>
            <p className="text-gray-600">Join our vibrant community forums.</p>
          </Link>
          <Link to="/social-and-community/kabayan-spotlight" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Kabayan Spotlight</h2>
            <p className="text-gray-600">Highlighting the achievements of Filipinos worldwide.</p>
          </Link>
          <Link to="/social-and-community/social-feeds" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Social Media Feeds</h2>
            <p className="text-gray-600">Follow us on our social media channels.</p>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SocialAndCommunityPage;