import React from 'react';
import Header from '../components/Header';
import FoodAndRecipes from '../components/FoodAndRecipes';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const FoodAndRecipesPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <FoodAndRecipes />
      <Newsletter />
      <Footer />
    </>
  );
};

export default FoodAndRecipesPage;
