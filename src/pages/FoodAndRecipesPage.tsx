import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const FoodAndRecipesPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-center mb-8">Food and Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/food-and-recipes/filipino-fusion-cuisine" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Filipino Fusion Cuisine</h2>
            <p className="text-gray-600">Explore modern Filipino dishes.</p>
          </Link>
          <Link to="/food-and-recipes/must-try-street-foods" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Must-Try Street Foods</h2>
            <p className="text-gray-600">Discover popular Filipino street food.</p>
          </Link>
          <Link to="/food-and-recipes/ofw-grocery-hacks" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">OFW Grocery Hacks</h2>
            <p className="text-gray-600">Tips for OFWs to find Filipino ingredients abroad.</p>
          </Link>
          <Link to="/food-and-recipes/top-regional-dishes" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Top Regional Dishes</h2>
            <p className="text-gray-600">A culinary journey through regional specialties.</p>
          </Link>
          <Link to="/food-and-recipes/weekly-featured-recipes" className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Weekly Featured Recipes</h2>
            <p className="text-gray-600">New and exciting Filipino recipes every week.</p>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default FoodAndRecipesPage;
