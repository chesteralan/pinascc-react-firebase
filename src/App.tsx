import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import DiscoverPhilippinesPage from "./pages/DiscoverPhilippinesPage";
import CultureAndLifestylePage from "./pages/CultureAndLifestylePage";
import FoodAndRecipesPage from "./pages/FoodAndRecipesPage";
import NewsAndHappeningsPage from "./pages/NewsAndHappeningsPage";
import JobsAndEconomyPage from "./pages/JobsAndEconomyPage";
import GovtServicesSimplifiedPage from "./pages/GovtServicesSimplifiedPage";
import ForOFWsAndBalikbayansPage from "./pages/ForOFWsAndBalikbayansPage";
import PinasNowToolsPage from "./pages/PinasNowToolsPage";
import VideoAndVisualsHubPage from "./pages/VideoAndVisualsHubPage";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Header darkMode={darkMode} /> {/* Pass darkMode prop to Header */}
      <button
        onClick={toggleDarkMode}
        style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}
      >
        Toggle Dark Mode
      </button>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route
          path="/discover-philippines"
          element={<DiscoverPhilippinesPage darkMode={darkMode} />}
        />
        <Route
          path="/culture-lifestyle"
          element={<CultureAndLifestylePage darkMode={darkMode} />}
        />
        <Route
          path="/food-recipes"
          element={<FoodAndRecipesPage darkMode={darkMode} />}
        />
        <Route
          path="/news-happenings"
          element={<NewsAndHappeningsPage darkMode={darkMode} />}
        />
        <Route
          path="/jobs-economy"
          element={<JobsAndEconomyPage darkMode={darkMode} />}
        />
        <Route
          path="/govt-services"
          element={<GovtServicesSimplifiedPage darkMode={darkMode} />}
        />
        <Route
          path="/ofws-balikbayans"
          element={<ForOFWsAndBalikbayansPage darkMode={darkMode} />}
        />
        <Route
          path="/pinas-now-tools"
          element={<PinasNowToolsPage darkMode={darkMode} />}
        />
        <Route
          path="/video-visuals-hub"
          element={<VideoAndVisualsHubPage darkMode={darkMode} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
