import React from 'react';
import TopRegionalDishes from './TopRegionalDishes';
import MustTryStreetFoods from './MustTryStreetFoods';
import FilipinoFusionCuisine from './FilipinoFusionCuisine';
import WeeklyFeaturedRecipes from './WeeklyFeaturedRecipes';
import OFWGroceryHacks from './OFWGroceryHacks';

const FoodAndRecipes: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Food & Recipes</h2>
        <TopRegionalDishes />
        <MustTryStreetFoods />
        <FilipinoFusionCuisine />
        <WeeklyFeaturedRecipes />
        <OFWGroceryHacks />
      </div>
    </div>
  );
};

export default FoodAndRecipes;