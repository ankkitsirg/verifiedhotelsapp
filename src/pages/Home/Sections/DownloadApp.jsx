import Button from "@/components/ui/Button";
import AppFeature from "@/components/app/AppFeature";
import { appFeatures } from "@/data/appFeatures";
import phoneImage from "@/assets/images/app/mobile-app.png";

function DownloadApp() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Mobile App
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Book Hotels Anywhere
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Carry StayTrue in your pocket. Search hotels,
            compare Reality Scores, save favourites and book
            confidently wherever you travel.
          </p>

          <div className="mt-10 space-y-4">
            {appFeatures.map((feature) => (
              <AppFeature
                key={feature.id}
                feature={feature}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              Google Play
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              App Store
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={phoneImage}
            alt="StayTrue Mobile App"
            className="max-h-[650px]"
          />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;