import HeroSection from "./sections/HeroSection";
import SearchSection from "./sections/SearchSection";
import PopularDestinations from "./sections/PopularDestinations";
import FeaturedHotels from "./sections/FeaturedHotels";
import WhyChooseUs from "./sections/WhyChooseUs";
import LatestReviews from "./sections/LatestReviews";
import RealityScoreSection from "./sections/RealityScoreSection";
import DownloadApp from "./sections/DownloadApp";
import Newsletter from "./sections/Newsletter";
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