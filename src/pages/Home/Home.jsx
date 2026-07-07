import HeroSection from "./Sections/HeroSection";
import SearchSection from "./Sections/SearchSection";
import PopularDestinations from "./Sections/PopularDestinations";
import FeaturedHotels from "./Sections/FeaturedHotels";
import WhyChooseUs from "./Sections/WhyChooseUs";
import LatestReviews from "./Sections/LatestReviews";
import RealityScoreSection from "./Sections/RealityScoreSection";
import DownloadApp from "./Sections/DownloadApp";
import Newsletter from "./Sections/Newsletter";
function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <PopularDestinations />
      <FeaturedHotels />
      <WhyChooseUs />
      <LatestReviews />
      <RealityScoreSection />
      <DownloadApp />
      <Newsletter />
    </>
  );
}

export default Home;