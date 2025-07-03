import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ProtectedRoute from "./components/ProtectedRoute";

const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const MyAccountPage = React.lazy(() => import("./pages/MyAccountPage"));

const DiscoverPhilippinesPage = React.lazy(
  () => import("./pages/DiscoverPhilippinesPage"),
);
const CultureAndLifestylePage = React.lazy(
  () => import("./pages/CultureAndLifestylePage"),
);
const FoodAndRecipesPage = React.lazy(
  () => import("./pages/FoodAndRecipesPage"),
);
const NewsAndHappeningsPage = React.lazy(
  () => import("./pages/NewsAndHappeningsPage"),
);
const JobsAndEconomyPage = React.lazy(
  () => import("./pages/JobsAndEconomyPage"),
);
const GovtServicesSimplifiedPage = React.lazy(
  () => import("./pages/GovtServicesSimplifiedPage"),
);
const ForOFWsAndBalikbayansPage = React.lazy(
  () => import("./pages/ForOFWsAndBalikbayansPage"),
);
const PinasNowToolsPage = React.lazy(() => import("./pages/PinasNowToolsPage"));
const VideoAndVisualsHubPage = React.lazy(
  () => import("./pages/VideoAndVisualsHubPage"),
);
const SocialAndCommunityPage = React.lazy(
  () => import("./pages/SocialAndCommunityPage"),
);
const CommonPhrasesPage = React.lazy(
  () => import("./pages/CultureAndLifestyle/CommonPhrasesPage"),
);
const FestivalsByMonthPage = React.lazy(
  () => import("./pages/CultureAndLifestyle/FestivalsByMonthPage"),
);
const FilipinoFashionPage = React.lazy(
  () => import("./pages/CultureAndLifestyle/FilipinoFashionPage"),
);
const FilipinoTraditionsPage = React.lazy(
  () => import("./pages/CultureAndLifestyle/FilipinoTraditionsPage"),
);
const FilipinoValuesPage = React.lazy(
  () => import("./pages/CultureAndLifestyle/FilipinoValuesPage"),
);
const NationalSymbolsPage = React.lazy(
  () => import("./pages/CultureAndLifestyle/NationalSymbolsPage"),
);
const BestTravelMonthsPage = React.lazy(
  () => import("./pages/DiscoverPhilippines/BestTravelMonthsPage"),
);
const HiddenGemsPage = React.lazy(
  () => import("./pages/DiscoverPhilippines/HiddenGemsPage"),
);
const InteractiveMapPage = React.lazy(
  () => import("./pages/DiscoverPhilippines/InteractiveMapPage"),
);
const LocalGuidesPage = React.lazy(
  () => import("./pages/DiscoverPhilippines/LocalGuidesPage"),
);
const TopDestinationsPage = React.lazy(
  () => import("./pages/DiscoverPhilippines/TopDestinationsPage"),
);
const VisaInfoPage = React.lazy(
  () => import("./pages/DiscoverPhilippines/VisaInfoPage"),
);
const FilipinoFusionCuisinePage = React.lazy(
  () => import("./pages/FoodAndRecipes/FilipinoFusionCuisinePage"),
);
const MustTryStreetFoodsPage = React.lazy(
  () => import("./pages/FoodAndRecipes/MustTryStreetFoodsPage"),
);
const OFWGroceryHacksPage = React.lazy(
  () => import("./pages/FoodAndRecipes/OFWGroceryHacksPage"),
);
const TopRegionalDishesPage = React.lazy(
  () => import("./pages/FoodAndRecipes/TopRegionalDishesPage"),
);
const WeeklyFeaturedRecipesPage = React.lazy(
  () => import("./pages/FoodAndRecipes/WeeklyFeaturedRecipesPage"),
);
const MoneyRemittanceTipsPage = React.lazy(
  () => import("./pages/ForOFWsAndBalikbayans/MoneyRemittanceTipsPage"),
);
const OFWRightsPage = React.lazy(
  () => import("./pages/ForOFWsAndBalikbayans/OFWRightsPage"),
);
const PinasFeelsPage = React.lazy(
  () => import("./pages/ForOFWsAndBalikbayans/PinasFeelsPage"),
);
const SupportNetworksAbroadPage = React.lazy(
  () => import("./pages/ForOFWsAndBalikbayans/SupportNetworksAbroadPage"),
);
const TravelRequirementsPage = React.lazy(
  () => import("./pages/ForOFWsAndBalikbayans/TravelRequirementsPage"),
);
const GovtHelpSectionsPage = React.lazy(
  () => import("./pages/GovtServicesSimplified/GovtHelpSectionsPage"),
);
const HotlineDirectoryPage = React.lazy(
  () => import("./pages/GovtServicesSimplified/HotlineDirectoryPage"),
);
const PassportVisaGuidesPage = React.lazy(
  () => import("./pages/GovtServicesSimplified/PassportVisaGuidesPage"),
);
const StepByStepGuidesPage = React.lazy(
  () => import("./pages/GovtServicesSimplified/StepByStepGuidesPage"),
);
const FreelancingDigitalNomadismPage = React.lazy(
  () => import("./pages/JobsAndEconomy/FreelancingDigitalNomadismPage"),
);
const JobHuntingTipsPage = React.lazy(
  () => import("./pages/JobsAndEconomy/JobHuntingTipsPage"),
);
const RemoteJobBoardsPage = React.lazy(
  () => import("./pages/JobsAndEconomy/RemoteJobBoardsPage"),
);
const SkillsDevelopmentPage = React.lazy(
  () => import("./pages/JobsAndEconomy/SkillsDevelopmentPage"),
);
const KnowThePhilippinesPage = React.lazy(
  () => import("./pages/KnowThePhilippines/KnowThePhilippinesPage"),
);
const BusinessAndTechPage = React.lazy(
  () => import("./pages/NewsAndHappenings/BusinessAndTechPage"),
);
const LocalGovAnnouncementsPage = React.lazy(
  () => import("./pages/NewsAndHappenings/LocalGovAnnouncementsPage"),
);
const NationalHeadlinesPage = React.lazy(
  () => import("./pages/NewsAndHappenings/NationalHeadlinesPage"),
);
const PositiveStoriesPage = React.lazy(
  () => import("./pages/NewsAndHappenings/PositiveStoriesPage"),
);
const BarangayLocatorPage = React.lazy(
  () => import("./pages/PinasNowTools/BarangayLocatorPage"),
);
const CurrencyConverterPage = React.lazy(
  () => import("./pages/PinasNowTools/CurrencyConverterPage"),
);
const FilipinoTimeConverterPage = React.lazy(
  () => import("./pages/PinasNowTools/FilipinoTimeConverterPage"),
);
const LanguageTranslatorPage = React.lazy(
  () => import("./pages/PinasNowTools/LanguageTranslatorPage"),
);
const LiveWeatherPage = React.lazy(
  () => import("./pages/PinasNowTools/LiveWeatherPage"),
);
const NationalHolidaysCalendarPage = React.lazy(
  () => import("./pages/PinasNowTools/NationalHolidaysCalendarPage"),
);
const FilipinoMemesPage = React.lazy(
  () => import("./pages/SocialAndCommunity/FilipinoMemesPage"),
);
const ForumsAndQAPage = React.lazy(
  () => import("./pages/SocialAndCommunity/ForumsAndQAPage"),
);
const KabayanSpotlightPage = React.lazy(
  () => import("./pages/SocialAndCommunity/KabayanSpotlightPage"),
);
const SocialFeedsPage = React.lazy(
  () => import("./pages/SocialAndCommunity/SocialFeedsPage"),
);
const FilipinoMythCreaturesPage = React.lazy(
  () => import("./pages/VideoAndVisualsHub/FilipinoMythCreaturesPage"),
);
const PrivacyPolicyPage = React.lazy(
  () => import("./pages/Legal/PrivacyPolicyPage"),
);
const TermsAndConditionsPage = React.lazy(
  () => import("./pages/Legal/TermsAndConditionsPage"),
);
const FAQPage = React.lazy(() => import("./pages/Legal/FAQPage"));
const HistoryIn60SecondsPage = React.lazy(
  () => import("./pages/VideoAndVisualsHub/HistoryIn60SecondsPage"),
);
const HowToBeFilipinoSeriesPage = React.lazy(
  () => import("./pages/VideoAndVisualsHub/HowToBeFilipinoSeriesPage"),
);
const ProvinceClipsPage = React.lazy(
  () => import("./pages/VideoAndVisualsHub/ProvinceClipsPage"),
);
const ContactUsPage = React.lazy(() => import("./pages/ContactUsPage"));

const App: React.FC = () => {
  const darkMode = true;

  return (
    <Router>
      <Header darkMode={darkMode} /> {/* Pass darkMode prop to Header */}
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/my-account"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <MyAccountPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/discover-philippines"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <DiscoverPhilippinesPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/culture-lifestyle"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CultureAndLifestylePage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/food-recipes"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FoodAndRecipesPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/news-happenings"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NewsAndHappeningsPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/jobs-economy"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <JobsAndEconomyPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/government-services"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GovtServicesSimplifiedPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/ofws-balikbayans"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForOFWsAndBalikbayansPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PinasNowToolsPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/video-visuals-hub"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <VideoAndVisualsHubPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/social-and-community"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SocialAndCommunityPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/culture-and-lifestyle/common-phrases"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CommonPhrasesPage />
            </Suspense>
          }
        />
        <Route
          path="/culture-and-lifestyle/festivals-by-month"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FestivalsByMonthPage />
            </Suspense>
          }
        />
        <Route
          path="/culture-and-lifestyle/filipino-fashion"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoFashionPage />
            </Suspense>
          }
        />
        <Route
          path="/culture-and-lifestyle/filipino-traditions"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoTraditionsPage />
            </Suspense>
          }
        />
        <Route
          path="/culture-and-lifestyle/filipino-values"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoValuesPage />
            </Suspense>
          }
        />
        <Route
          path="/culture-and-lifestyle/national-symbols"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NationalSymbolsPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-philippines/best-travel-months"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BestTravelMonthsPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-philippines/hidden-gems"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HiddenGemsPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-philippines/interactive-map"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <InteractiveMapPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-philippines/local-guides"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LocalGuidesPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-philippines/top-destinations"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <TopDestinationsPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-philippines/visa-info"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <VisaInfoPage />
            </Suspense>
          }
        />
        <Route
          path="/food-and-recipes/filipino-fusion-cuisine"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoFusionCuisinePage />
            </Suspense>
          }
        />
        <Route
          path="/food-and-recipes/must-try-street-foods"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <MustTryStreetFoodsPage />
            </Suspense>
          }
        />
        <Route
          path="/food-and-recipes/ofw-grocery-hacks"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <OFWGroceryHacksPage />
            </Suspense>
          }
        />
        <Route
          path="/food-and-recipes/top-regional-dishes"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <TopRegionalDishesPage />
            </Suspense>
          }
        />
        <Route
          path="/food-and-recipes/weekly-featured-recipes"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <WeeklyFeaturedRecipesPage />
            </Suspense>
          }
        />
        <Route
          path="/for-ofws-and-balikbayans/money-remittance-tips"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <MoneyRemittanceTipsPage />
            </Suspense>
          }
        />
        <Route
          path="/for-ofws-and-balikbayans/ofw-rights"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <OFWRightsPage />
            </Suspense>
          }
        />
        <Route
          path="/for-ofws-and-balikbayans/pinas-feels"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PinasFeelsPage />
            </Suspense>
          }
        />
        <Route
          path="/for-ofws-and-balikbayans/support-networks-abroad"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SupportNetworksAbroadPage />
            </Suspense>
          }
        />
        <Route
          path="/for-ofws-and-balikbayans/travel-requirements"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <TravelRequirementsPage />
            </Suspense>
          }
        />
        <Route
          path="/government-services/govt-help-sections"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GovtHelpSectionsPage />
            </Suspense>
          }
        />
        <Route
          path="/government-services/hotline-directory"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HotlineDirectoryPage />
            </Suspense>
          }
        />
        <Route
          path="/government-services/passport-visa-guides"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PassportVisaGuidesPage />
            </Suspense>
          }
        />
        <Route
          path="/government-services/step-by-step-guides"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <StepByStepGuidesPage />
            </Suspense>
          }
        />
        <Route
          path="/jobs-and-economy/freelancing-digital-nomadism"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FreelancingDigitalNomadismPage />
            </Suspense>
          }
        />
        <Route
          path="/jobs-and-economy/job-hunting-tips"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <JobHuntingTipsPage />
            </Suspense>
          }
        />
        <Route
          path="/jobs-and-economy/remote-job-boards"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <RemoteJobBoardsPage />
            </Suspense>
          }
        />
        <Route
          path="/jobs-and-economy/skills-development"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SkillsDevelopmentPage />
            </Suspense>
          }
        />
        <Route
          path="/know-the-philippines"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <KnowThePhilippinesPage />
            </Suspense>
          }
        />
        <Route
          path="/news-and-happenings/business-and-tech"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BusinessAndTechPage />
            </Suspense>
          }
        />
        <Route
          path="/news-and-happenings/local-gov-announcements"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LocalGovAnnouncementsPage />
            </Suspense>
          }
        />
        <Route
          path="/news-and-happenings/national-headlines"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NationalHeadlinesPage />
            </Suspense>
          }
        />
        <Route
          path="/news-and-happenings/positive-stories"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PositiveStoriesPage />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools/barangay-locator"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BarangayLocatorPage />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools/currency-converter"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CurrencyConverterPage />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools/filipino-time-converter"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoTimeConverterPage />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools/language-translator"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LanguageTranslatorPage />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools/live-weather"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LiveWeatherPage />
            </Suspense>
          }
        />
        <Route
          path="/pinas-now-tools/national-holidays-calendar"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NationalHolidaysCalendarPage />
            </Suspense>
          }
        />
        <Route
          path="/social-and-community/filipino-memes"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoMemesPage />
            </Suspense>
          }
        />
        <Route
          path="/social-and-community/forums-and-qa"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ForumsAndQAPage />
            </Suspense>
          }
        />
        <Route
          path="/social-and-community/kabayan-spotlight"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <KabayanSpotlightPage />
            </Suspense>
          }
        />
        <Route
          path="/social-and-community/social-feeds"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SocialFeedsPage />
            </Suspense>
          }
        />
        <Route
          path="/video-and-visuals-hub/filipino-myth-creatures"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FilipinoMythCreaturesPage />
            </Suspense>
          }
        />
        <Route
          path="/video-and-visuals-hub/history-in-60-seconds"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HistoryIn60SecondsPage />
            </Suspense>
          }
        />
        <Route
          path="/video-and-visuals-hub/how-to-be-filipino-series"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <HowToBeFilipinoSeriesPage />
            </Suspense>
          }
        />
        <Route
          path="/video-visuals-hub/province-clips"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProvinceClipsPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivacyPolicyPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <TermsAndConditionsPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FAQPage darkMode={darkMode} />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactUsPage darkMode={darkMode} />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
