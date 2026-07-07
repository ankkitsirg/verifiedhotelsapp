import HotelCard from "@/components/hotel/HotelCard";

function HotelGrid({ hotels }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />
      ))}
    </div>
  );
}

export default HotelGrid;