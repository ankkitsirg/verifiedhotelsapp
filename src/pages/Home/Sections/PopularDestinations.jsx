import destinations from "@/data/destinations.json";
import DestinationCard from "@/components/destination/DestinationCard";

function PopularDestinations() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4">
      <h2 className="mb-2 text-4xl font-bold">
        Popular Destinations
      </h2>

      <p className="mb-10 text-gray-500">
        Discover hotels in India's most loved destinations.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
         <DestinationCard
              key={destination.id}
              destination={destination}
            />
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;