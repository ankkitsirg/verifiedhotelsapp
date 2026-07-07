import { FaHotel, FaMapMarkerAlt, FaStar } from "react-icons/fa";

function DestinationCard({ destination }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-60 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5 text-white">
          <h3 className="text-2xl font-bold">
            {destination.name}
          </h3>

          <div className="mt-1 flex items-center gap-2 text-sm">
            <FaMapMarkerAlt />

            <span>{destination.country}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <FaHotel className="text-blue-600" />

          <span>{destination.hotels} Hotels</span>
        </div>

        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />

          <span>{destination.rating}</span>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;