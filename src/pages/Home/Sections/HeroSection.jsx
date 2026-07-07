import heroImage from "@/assets/images/hero.jpg";
import Button from "@/components/ui/Button";
import {
  FaShieldAlt,
  FaCamera,
  FaMagic,
} from "react-icons/fa";

function HeroSection() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
        {/* Badge */}
        <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest">
          Verified Hotel Platform
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          See the Real Hotel
          <br />
          Before You Book
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          Verified guest reviews, authentic room photos and AI-powered
          Reality Scores help you book with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">
            Explore Hotels
          </Button>

          <Button
            variant="secondary"
            size="lg"
          >
            How It Works
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-lg">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-400" />
            <span>Verified Reviews</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCamera className="text-yellow-300" />
            <span>Real Guest Photos</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMagic className="text-blue-300" />
            <span>AI Reality Score</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;