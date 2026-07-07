import HotelCard from "@/components/hotel/HotelCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { hotels } from "@/data/hotels";

function FeaturedHotels() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          badge="Featured"
          title="Featured Hotels"
          subtitle="Verified hotels with authentic guest reviews and AI-powered Reality Scores."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedHotels;