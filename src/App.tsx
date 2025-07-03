import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoadingSpinner from "./components/LoadingSpinner";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/MainLayout";
import DetailPage from "./pages/DetailPage";
import { cultureAndLifestyleData } from "./data/cultureAndLifestyleData";
import { discoverPhilippinesData } from "./data/discoverPhilippinesData";
import { govtServicesSimplifiedData } from "./data/govtServicesSimplifiedData";
import { jobsAndEconomyData } from "./data/jobsAndEconomyData";
import { newsAndHappeningsData } from "./data/newsAndHappeningsData";
import { pinasNowToolsData } from "./data/pinasNowToolsData";
import { socialAndCommunityData } from "./data/socialAndCommunityData";
import { videoAndVisualsHubData } from "./data/videoAndVisualsHubData";
import { foodAndRecipesData } from "./data/foodAndRecipesData";

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

  const routes = [
    { path: "/", element: <HomePage /> },
    {
      path: "/login",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/my-account",
      element: (
        <ProtectedRoute>
          <Suspense fallback={<LoadingSpinner />}>
            <MyAccountPage />
          </Suspense>
        </ProtectedRoute>
      ),
    },
    {
      path: "/discover-philippines",
      element: <DiscoverPhilippinesPage darkMode={darkMode} />,
    },
    {
      path: "/culture-lifestyle",
      element: <CultureAndLifestylePage darkMode={darkMode} />,
    },
    {
      path: "/food-recipes",
      element: <FoodAndRecipesPage darkMode={darkMode} />,
    },
    {
      path: "/news-happenings",
      element: <NewsAndHappeningsPage darkMode={darkMode} />,
    },
    {
      path: "/jobs-economy",
      element: <JobsAndEconomyPage darkMode={darkMode} />,
    },
    {
      path: "/government-services",
      element: <GovtServicesSimplifiedPage darkMode={darkMode} />,
    },
    {
      path: "/ofws-balikbayans",
      element: <ForOFWsAndBalikbayansPage darkMode={darkMode} />,
    },
    {
      path: "/pinas-now-tools",
      element: <PinasNowToolsPage darkMode={darkMode} />,
    },
    {
      path: "/video-visuals-hub",
      element: <VideoAndVisualsHubPage darkMode={darkMode} />,
    },
    {
      path: "/social-and-community",
      element: <SocialAndCommunityPage darkMode={darkMode} />,
    },
    {
      path: "/culture-and-lifestyle/common-phrases",
      element: <CommonPhrasesPage />,
    },
    {
      path: "/culture-and-lifestyle/festivals-by-month",
      element: <FestivalsByMonthPage />,
    },
    {
      path: "/culture-and-lifestyle/filipino-fashion",
      element: <FilipinoFashionPage />,
    },
    {
      path: "/culture-and-lifestyle/filipino-traditions",
      element: <FilipinoTraditionsPage />,
    },
    {
      path: "/culture-and-lifestyle/filipino-values",
      element: <FilipinoValuesPage />,
    },
    {
      path: "/culture-and-lifestyle/national-symbols",
      element: <NationalSymbolsPage />,
    },
    {
      path: "/culture-and-lifestyle/common-phrases/:id",
      element: <DetailPage data={cultureAndLifestyleData} />,
    },
    {
      path: "/culture-and-lifestyle/festivals-by-month/:id",
      element: <DetailPage data={cultureAndLifestyleData} />,
    },
    {
      path: "/culture-and-lifestyle/filipino-fashion/:id",
      element: <DetailPage data={cultureAndLifestyleData} />,
    },
    {
      path: "/culture-and-lifestyle/filipino-traditions/:id",
      element: <DetailPage data={cultureAndLifestyleData} />,
    },
    {
      path: "/culture-and-lifestyle/filipino-values/:id",
      element: <DetailPage data={cultureAndLifestyleData} />,
    },
    {
      path: "/culture-and-lifestyle/national-symbols/:id",
      element: <DetailPage data={cultureAndLifestyleData} />,
    },
    {
      path: "/discover-philippines/best-travel-months",
      element: <BestTravelMonthsPage />,
    },
    {
      path: "/discover-philippines/hidden-gems",
      element: <HiddenGemsPage />,
    },
    {
      path: "/discover-philippines/interactive-map",
      element: <InteractiveMapPage />,
    },
    {
      path: "/discover-philippines/local-guides",
      element: <LocalGuidesPage />,
    },
    {
      path: "/discover-philippines/top-destinations",
      element: <TopDestinationsPage />,
    },
    { path: "/discover-philippines/visa-info", element: <VisaInfoPage /> },
    {
      path: "/discover-philippines/best-travel-months/:id",
      element: <DetailPage data={discoverPhilippinesData} />,
    },
    {
      path: "/discover-philippines/hidden-gems/:id",
      element: <DetailPage data={discoverPhilippinesData} />,
    },
    {
      path: "/discover-philippines/interactive-map/:id",
      element: <DetailPage data={discoverPhilippinesData} />,
    },
    {
      path: "/discover-philippines/local-guides/:id",
      element: <DetailPage data={discoverPhilippinesData} />,
    },
    {
      path: "/discover-philippines/top-destinations/:id",
      element: <DetailPage data={discoverPhilippinesData} />,
    },
    {
      path: "/discover-philippines/visa-info/:id",
      element: <DetailPage data={discoverPhilippinesData} />,
    },
    {
      path: "/food-and-recipes/filipino-fusion-cuisine",
      element: <FilipinoFusionCuisinePage />,
    },
    {
      path: "/food-and-recipes/must-try-street-foods",
      element: <MustTryStreetFoodsPage />,
    },
    {
      path: "/food-and-recipes/ofw-grocery-hacks",
      element: <OFWGroceryHacksPage />,
    },
    {
      path: "/food-and-recipes/top-regional-dishes",
      element: <TopRegionalDishesPage />,
    },
    {
      path: "/food-and-recipes/weekly-featured-recipes",
      element: <WeeklyFeaturedRecipesPage />,
    },
    {
      path: "/food-and-recipes/filipino-fusion-cuisine/:id",
      element: <DetailPage data={foodAndRecipesData} />,
    },
    {
      path: "/food-and-recipes/must-try-street-foods/:id",
      element: <DetailPage data={foodAndRecipesData} />,
    },
    {
      path: "/food-and-recipes/ofw-grocery-hacks/:id",
      element: <DetailPage data={foodAndRecipesData} />,
    },
    {
      path: "/food-and-recipes/top-regional-dishes/:id",
      element: <DetailPage data={foodAndRecipesData} />,
    },
    {
      path: "/food-and-recipes/weekly-featured-recipes/:id",
      element: <DetailPage data={foodAndRecipesData} />,
    },
    {
      path: "/for-ofws-and-balikbayans/money-remittance-tips",
      element: <MoneyRemittanceTipsPage />,
    },
    {
      path: "/for-ofws-and-balikbayans/ofw-rights",
      element: <OFWRightsPage />,
    },
    {
      path: "/for-ofws-and-balikbayans/pinas-feels",
      element: <PinasFeelsPage />,
    },
    {
      path: "/for-ofws-and-balikbayans/support-networks-abroad",
      element: <SupportNetworksAbroadPage />,
    },
    {
      path: "/for-ofws-and-balikbayans/travel-requirements",
      element: <TravelRequirementsPage />,
    },
    {
      path: "/government-services/govt-help-sections",
      element: <GovtHelpSectionsPage />,
    },
    {
      path: "/government-services/hotline-directory",
      element: <HotlineDirectoryPage />,
    },
    {
      path: "/government-services/passport-visa-guides",
      element: <PassportVisaGuidesPage />,
    },
    {
      path: "/government-services/step-by-step-guides",
      element: <StepByStepGuidesPage />,
    },
    {
      path: "/government-services/govt-help-sections/:id",
      element: <DetailPage data={govtServicesSimplifiedData} />,
    },
    {
      path: "/government-services/hotline-directory/:id",
      element: <DetailPage data={govtServicesSimplifiedData} />,
    },
    {
      path: "/government-services/passport-visa-guides/:id",
      element: <DetailPage data={govtServicesSimplifiedData} />,
    },
    {
      path: "/government-services/step-by-step-guides/:id",
      element: <DetailPage data={govtServicesSimplifiedData} />,
    },
    {
      path: "/jobs-and-economy/freelancing-digital-nomadism",
      element: <FreelancingDigitalNomadismPage />,
    },
    {
      path: "/jobs-and-economy/job-hunting-tips",
      element: <JobHuntingTipsPage />,
    },
    {
      path: "/jobs-and-economy/remote-job-boards",
      element: <RemoteJobBoardsPage />,
    },
    {
      path: "/jobs-and-economy/skills-development",
      element: <SkillsDevelopmentPage />,
    },
    {
      path: "/jobs-and-economy/freelancing-digital-nomadism/:id",
      element: <DetailPage data={jobsAndEconomyData} />,
    },
    {
      path: "/jobs-and-economy/job-hunting-tips/:id",
      element: <DetailPage data={jobsAndEconomyData} />,
    },
    {
      path: "/jobs-and-economy/remote-job-boards/:id",
      element: <DetailPage data={jobsAndEconomyData} />,
    },
    {
      path: "/jobs-and-economy/skills-development/:id",
      element: <DetailPage data={jobsAndEconomyData} />,
    },
    { path: "/know-the-philippines", element: <KnowThePhilippinesPage /> },
    {
      path: "/news-and-happenings/business-and-tech",
      element: <BusinessAndTechPage />,
    },
    {
      path: "/news-and-happenings/local-gov-announcements",
      element: <LocalGovAnnouncementsPage />,
    },
    {
      path: "/news-and-happenings/national-headlines",
      element: <NationalHeadlinesPage />,
    },
    {
      path: "/news-and-happenings/positive-stories",
      element: <PositiveStoriesPage />,
    },
    {
      path: "/news-and-happenings/business-and-tech/:id",
      element: <DetailPage data={newsAndHappeningsData} />,
    },
    {
      path: "/news-and-happenings/local-gov-announcements/:id",
      element: <DetailPage data={newsAndHappeningsData} />,
    },
    {
      path: "/news-and-happenings/national-headlines/:id",
      element: <DetailPage data={newsAndHappeningsData} />,
    },
    {
      path: "/news-and-happenings/positive-stories/:id",
      element: <DetailPage data={newsAndHappeningsData} />,
    },
    {
      path: "/pinas-now-tools/barangay-locator",
      element: <BarangayLocatorPage />,
    },
    {
      path: "/pinas-now-tools/currency-converter",
      element: <CurrencyConverterPage />,
    },
    {
      path: "/pinas-now-tools/filipino-time-converter",
      element: <FilipinoTimeConverterPage />,
    },
    {
      path: "/pinas-now-tools/language-translator",
      element: <LanguageTranslatorPage />,
    },
    { path: "/pinas-now-tools/live-weather", element: <LiveWeatherPage /> },
    {
      path: "/pinas-now-tools/national-holidays-calendar",
      element: <NationalHolidaysCalendarPage />,
    },
    {
      path: "/pinas-now-tools/barangay-locator/:id",
      element: <DetailPage data={pinasNowToolsData} />,
    },
    {
      path: "/pinas-now-tools/currency-converter/:id",
      element: <DetailPage data={pinasNowToolsData} />,
    },
    {
      path: "/pinas-now-tools/filipino-time-converter/:id",
      element: <DetailPage data={pinasNowToolsData} />,
    },
    {
      path: "/pinas-now-tools/language-translator/:id",
      element: <DetailPage data={pinasNowToolsData} />,
    },
    {
      path: "/pinas-now-tools/live-weather/:id",
      element: <DetailPage data={pinasNowToolsData} />,
    },
    {
      path: "/pinas-now-tools/national-holidays-calendar/:id",
      element: <DetailPage data={pinasNowToolsData} />,
    },
    {
      path: "/social-and-community/filipino-memes",
      element: <FilipinoMemesPage />,
    },
    {
      path: "/social-and-community/forums-and-qa",
      element: <ForumsAndQAPage />,
    },
    {
      path: "/social-and-community/kabayan-spotlight",
      element: <KabayanSpotlightPage />,
    },
    {
      path: "/social-and-community/social-feeds",
      element: <SocialFeedsPage />,
    },
    {
      path: "/social-and-community/filipino-memes/:id",
      element: <DetailPage data={socialAndCommunityData} />,
    },
    {
      path: "/social-and-community/forums-and-qa/:id",
      element: <DetailPage data={socialAndCommunityData} />,
    },
    {
      path: "/social-and-community/kabayan-spotlight/:id",
      element: <DetailPage data={socialAndCommunityData} />,
    },
    {
      path: "/social-and-community/social-feeds/:id",
      element: <DetailPage data={socialAndCommunityData} />,
    },
    {
      path: "/video-and-visuals-hub/filipino-myth-creatures",
      element: <FilipinoMythCreaturesPage />,
    },
    {
      path: "/video-and-visuals-hub/history-in-60-seconds",
      element: <HistoryIn60SecondsPage />,
    },
    {
      path: "/video-and-visuals-hub/how-to-be-filipino-series",
      element: <HowToBeFilipinoSeriesPage />,
    },
    {
      path: "/video-and-visuals-hub/province-clips",
      element: <ProvinceClipsPage />,
    },
    {
      path: "/video-and-visuals-hub/filipino-myth-creatures/:id",
      element: <DetailPage data={videoAndVisualsHubData} />,
    },
    {
      path: "/video-and-visuals-hub/history-in-60-seconds/:id",
      element: <DetailPage data={videoAndVisualsHubData} />,
    },
    {
      path: "/video-and-visuals-hub/how-to-be-filipino-series/:id",
      element: <DetailPage data={videoAndVisualsHubData} />,
    },
    {
      path: "/video-visuals-hub/province-clips/:id",
      element: <DetailPage data={videoAndVisualsHubData} />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicyPage darkMode={darkMode} />,
    },
    {
      path: "/terms-and-conditions",
      element: <TermsAndConditionsPage darkMode={darkMode} />,
    },
    { path: "/faq", element: <FAQPage darkMode={darkMode} /> },
    { path: "/contact-us", element: <ContactUsPage darkMode={darkMode} /> },
  ];

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <MainLayout darkMode={darkMode}>{route.element}</MainLayout>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
