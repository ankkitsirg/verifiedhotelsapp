import { Link } from "react-router-dom";

import HotelCard from "@/components/hotel/HotelCard";

import { hotels } from "@/data/hotels";

function SimilarHotels({ hotel }) {
  const similarHotels = hotels
    .filter(
      (item) =>
        item.id !== hotel.id &&
        item.type === hotel.type
    )
    .slice(0, 3);

  if (similarHotels.length === 0) {
    return null;
  }

  return (
    <section>

      <h2 className="mb-8 text-3xl font-bold">
        You May Also Like
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {similarHotels.map((hotel) => (

          <Link
            key={hotel.id}
            to={`/hotels/${hotel.id}`}
          >

            <HotelCard hotel={hotel} />

          </Link>

        ))}

      </div>

    </section>
  );
}

export default SimilarHotels;