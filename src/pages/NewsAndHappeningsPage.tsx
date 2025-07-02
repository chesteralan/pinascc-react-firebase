import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const NewsAndHappeningsPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">News and Happenings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/news-and-happenings/business-and-tech" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group">
            <img src="/gallery-1.jpg" alt="Business & Tech" className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h2 className="text-xl font-semibold">Business & Tech</h2>
            <p className="text-gray-600">Latest trends in Philippine business and technology.</p>
          </Link>
          <Link to="/news-and-happenings/local-gov-announcements" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group">
            <img src="/gallery-2.jpg" alt="Local Gov't Announcements" className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h2 className="text-xl font-semibold">Local Gov't Announcements</h2>
            <p className="text-gray-600">Updates from local government units.</p>
          </Link>
          <Link to="/news-and-happenings/national-headlines" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group">
            <img src="/gallery-3.jpg" alt="National Headlines" className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h2 className="text-xl font-semibold">National Headlines</h2>
            <p className="text-gray-600">Curated national news and current events.</p>
          </Link>
          <Link to="/news-and-happenings/positive-stories" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group">
            <img src="/gallery-4.jpg" alt="Positive Stories" className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h2 className="text-xl font-semibold">Positive Stories</h2>
            <p className="text-gray-600">Heartwarming stories from the provinces.</p>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default NewsAndHappeningsPage;
