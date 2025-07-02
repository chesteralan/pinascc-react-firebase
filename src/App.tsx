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
import CommonPhrasesPage from "./pages/CultureAndLifestyle/CommonPhrasesPage";
import FestivalsByMonthPage from "./pages/CultureAndLifestyle/FestivalsByMonthPage";
import FilipinoFashionPage from "./pages/CultureAndLifestyle/FilipinoFashionPage";
import FilipinoTraditionsPage from "./pages/CultureAndLifestyle/FilipinoTraditionsPage";
import FilipinoValuesPage from "./pages/CultureAndLifestyle/FilipinoValuesPage";
import NationalSymbolsPage from "./pages/CultureAndLifestyle/NationalSymbolsPage";
import BestTravelMonthsPage from "./pages/DiscoverPhilippines/BestTravelMonthsPage";
import HiddenGemsPage from "./pages/DiscoverPhilippines/HiddenGemsPage";
import InteractiveMapPage from "./pages/DiscoverPhilippines/InteractiveMapPage";
import LocalGuidesPage from "./pages/DiscoverPhilippines/LocalGuidesPage";
import TopDestinationsPage from "./pages/DiscoverPhilippines/TopDestinationsPage";
import VisaInfoPage from "./pages/DiscoverPhilippines/VisaInfoPage";
import FilipinoFusionCuisinePage from "./pages/FoodAndRecipes/FilipinoFusionCuisinePage";
import MustTryStreetFoodsPage from "./pages/FoodAndRecipes/MustTryStreetFoodsPage";
import OFWGroceryHacksPage from "./pages/FoodAndRecipes/OFWGroceryHacksPage";
import TopRegionalDishesPage from "./pages/FoodAndRecipes/TopRegionalDishesPage";
import WeeklyFeaturedRecipesPage from "./pages/FoodAndRecipes/WeeklyFeaturedRecipesPage";
import MoneyRemittanceTipsPage from "./pages/ForOFWsAndBalikbayans/MoneyRemittanceTipsPage";
import OFWRightsPage from "./pages/ForOFWsAndBalikbayans/OFWRightsPage";
import PinasFeelsPage from "./pages/ForOFWsAndBalikbayans/PinasFeelsPage";
import SupportNetworksAbroadPage from "./pages/ForOFWsAndBalikbayans/SupportNetworksAbroadPage";
import TravelRequirementsPage from "./pages/ForOFWsAndBalikbayans/TravelRequirementsPage";
import GovtHelpSectionsPage from "./pages/GovtServicesSimplified/GovtHelpSectionsPage";
import HotlineDirectoryPage from "./pages/GovtServicesSimplified/HotlineDirectoryPage";
import PassportVisaGuidesPage from "./pages/GovtServicesSimplified/PassportVisaGuidesPage";
import StepByStepGuidesPage from "./pages/GovtServicesSimplified/StepByStepGuidesPage";
import FreelancingDigitalNomadismPage from "./pages/JobsAndEconomy/FreelancingDigitalNomadismPage";
import JobHuntingTipsPage from "./pages/JobsAndEconomy/JobHuntingTipsPage";
import RemoteJobBoardsPage from "./pages/JobsAndEconomy/RemoteJobBoardsPage";
import SkillsDevelopmentPage from "./pages/JobsAndEconomy/SkillsDevelopmentPage";
import KnowThePhilippinesPage from "./pages/KnowThePhilippines/KnowThePhilippinesPage";
import BusinessAndTechPage from "./pages/NewsAndHappenings/BusinessAndTechPage";
import LocalGovAnnouncementsPage from "./pages/NewsAndHappenings/LocalGovAnnouncementsPage";
import NationalHeadlinesPage from "./pages/NewsAndHappenings/NationalHeadlinesPage";
import PositiveStoriesPage from "./pages/NewsAndHappenings/PositiveStoriesPage";
import BarangayLocatorPage from "./pages/PinasNowTools/BarangayLocatorPage";
import CurrencyConverterPage from "./pages/PinasNowTools/CurrencyConverterPage";
import FilipinoTimeConverterPage from "./pages/PinasNowTools/FilipinoTimeConverterPage";
import LanguageTranslatorPage from "./pages/PinasNowTools/LanguageTranslatorPage";
import LiveWeatherPage from "./pages/PinasNowTools/LiveWeatherPage";
import NationalHolidaysCalendarPage from "./pages/PinasNowTools/NationalHolidaysCalendarPage";
import FilipinoMemesPage from "./pages/SocialAndCommunity/FilipinoMemesPage";
import ForumsAndQAPage from "./pages/SocialAndCommunity/ForumsAndQAPage";
import KabayanSpotlightPage from "./pages/SocialAndCommunity/KabayanSpotlightPage";
import SocialFeedsPage from "./pages/SocialAndCommunity/SocialFeedsPage";
import FilipinoMythCreaturesPage from "./pages/VideoAndVisualsHub/FilipinoMythCreaturesPage";
import PrivacyPolicyPage from "./pages/Legal/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/Legal/TermsAndConditionsPage";
import FAQPage from "./pages/Legal/FAQPage";
import HistoryIn60SecondsPage from "./pages/VideoAndVisualsHub/HistoryIn60SecondsPage";
import HowToBeFilipinoSeriesPage from "./pages/VideoAndVisualsHub/HowToBeFilipinoSeriesPage";
import ProvinceClipsPage from "./pages/VideoAndVisualsHub/ProvinceClipsPage";
import SocialAndCommunityPage from "./pages/SocialAndCommunityPage";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

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
        <Route
          path="/social-and-community"
          element={<SocialAndCommunityPage darkMode={darkMode} />}
        />
        <Route
          path="/culture-and-lifestyle/common-phrases"
          element={<CommonPhrasesPage />}
        />
        <Route
          path="/culture-and-lifestyle/festivals-by-month"
          element={<FestivalsByMonthPage />}
        />
        <Route
          path="/culture-and-lifestyle/filipino-fashion"
          element={<FilipinoFashionPage />}
        />
        <Route
          path="/culture-and-lifestyle/filipino-traditions"
          element={<FilipinoTraditionsPage />}
        />
        <Route
          path="/culture-and-lifestyle/filipino-values"
          element={<FilipinoValuesPage />}
        />
        <Route
          path="/culture-and-lifestyle/national-symbols"
          element={<NationalSymbolsPage />}
        />
        <Route
          path="/discover-philippines/best-travel-months"
          element={<BestTravelMonthsPage />}
        />
        <Route
          path="/discover-philippines/hidden-gems"
          element={<HiddenGemsPage />}
        />
        <Route
          path="/discover-philippines/interactive-map"
          element={<InteractiveMapPage />}
        />
        <Route
          path="/discover-philippines/local-guides"
          element={<LocalGuidesPage />}
        />
        <Route
          path="/discover-philippines/top-destinations"
          element={<TopDestinationsPage />}
        />
        <Route
          path="/discover-philippines/visa-info"
          element={<VisaInfoPage />}
        />
        <Route
          path="/food-and-recipes/filipino-fusion-cuisine"
          element={<FilipinoFusionCuisinePage />}
        />
        <Route
          path="/food-and-recipes/must-try-street-foods"
          element={<MustTryStreetFoodsPage />}
        />
        <Route
          path="/food-and-recipes/ofw-grocery-hacks"
          element={<OFWGroceryHacksPage />}
        />
        <Route
          path="/food-and-recipes/top-regional-dishes"
          element={<TopRegionalDishesPage />}
        />
        <Route
          path="/food-and-recipes/weekly-featured-recipes"
          element={<WeeklyFeaturedRecipesPage />}
        />
        <Route
          path="/for-ofws-and-balikbayans/money-remittance-tips"
          element={<MoneyRemittanceTipsPage />}
        />
        <Route
          path="/for-ofws-and-balikbayans/ofw-rights"
          element={<OFWRightsPage />}
        />
        <Route
          path="/for-ofws-and-balikbayans/pinas-feels"
          element={<PinasFeelsPage />}
        />
        <Route
          path="/for-ofws-and-balikbayans/support-networks-abroad"
          element={<SupportNetworksAbroadPage />}
        />
        <Route
          path="/for-ofws-and-balikbayans/travel-requirements"
          element={<TravelRequirementsPage />}
        />
        <Route
          path="/govt-services-simplified/govt-help-sections"
          element={<GovtHelpSectionsPage />}
        />
        <Route
          path="/govt-services-simplified/hotline-directory"
          element={<HotlineDirectoryPage />}
        />
        <Route
          path="/govt-services-simplified/passport-visa-guides"
          element={<PassportVisaGuidesPage />}
        />
        <Route
          path="/govt-services-simplified/step-by-step-guides"
          element={<StepByStepGuidesPage />}
        />
        <Route
          path="/jobs-and-economy/freelancing-digital-nomadism"
          element={<FreelancingDigitalNomadismPage />}
        />
        <Route
          path="/jobs-and-economy/job-hunting-tips"
          element={<JobHuntingTipsPage />}
        />
        <Route
          path="/jobs-and-economy/remote-job-boards"
          element={<RemoteJobBoardsPage />}
        />
        <Route
          path="/jobs-and-economy/skills-development"
          element={<SkillsDevelopmentPage />}
        />
        <Route
          path="/know-the-philippines"
          element={<KnowThePhilippinesPage />}
        />
        <Route
          path="/news-and-happenings/business-and-tech"
          element={<BusinessAndTechPage />}
        />
        <Route
          path="/news-and-happenings/local-gov-announcements"
          element={<LocalGovAnnouncementsPage />}
        />
        <Route
          path="/news-and-happenings/national-headlines"
          element={<NationalHeadlinesPage />}
        />
        <Route
          path="/news-and-happenings/positive-stories"
          element={<PositiveStoriesPage />}
        />
        <Route
          path="/pinas-now-tools/barangay-locator"
          element={<BarangayLocatorPage />}
        />
        <Route
          path="/pinas-now-tools/currency-converter"
          element={<CurrencyConverterPage />}
        />
        <Route
          path="/pinas-now-tools/filipino-time-converter"
          element={<FilipinoTimeConverterPage />}
        />
        <Route
          path="/pinas-now-tools/language-translator"
          element={<LanguageTranslatorPage />}
        />
        <Route
          path="/pinas-now-tools/live-weather"
          element={<LiveWeatherPage />}
        />
        <Route
          path="/pinas-now-tools/national-holidays-calendar"
          element={<NationalHolidaysCalendarPage />}
        />
        <Route
          path="/social-and-community/filipino-memes"
          element={<FilipinoMemesPage />}
        />
        <Route
          path="/social-and-community/forums-and-qa"
          element={<ForumsAndQAPage />}
        />
        <Route
          path="/social-and-community/kabayan-spotlight"
          element={<KabayanSpotlightPage />}
        />
        <Route
          path="/social-and-community/social-feeds"
          element={<SocialFeedsPage />}
        />
        <Route
          path="/video-and-visuals-hub/filipino-myth-creatures"
          element={<FilipinoMythCreaturesPage />}
        />
        <Route
          path="/video-and-visuals-hub/history-in-60-seconds"
          element={<HistoryIn60SecondsPage />}
        />
        <Route
          path="/video-and-visuals-hub/how-to-be-filipino-series"
          element={<HowToBeFilipinoSeriesPage />}
        />
        <Route
          path="/video-visuals-hub/province-clips"
          element={<ProvinceClipsPage />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicyPage darkMode={darkMode} />}
        />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage darkMode={darkMode} />}
        />
        <Route
          path="/faq"
          element={<FAQPage darkMode={darkMode} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
