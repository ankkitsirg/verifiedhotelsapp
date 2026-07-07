import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

function HotelInfo({ hotel }) {
  return (
    <section className="space-y-8">

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-4 text-sm">

        <div className="flex items-center gap-2">

          <FaStar className="text-yellow-500" />

          <span className="font-semibold">
            {hotel.rating}
          </span>

        </div>

        <span className="text-slate-500">
          ({hotel.reviews} Reviews)
        </span>

      </div>

      {/* Name */}

      <div className="flex flex-wrap items-start justify-between gap-6">

        <div>

          <h1 className="text-4xl font-bold">
            {hotel.name}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-slate-600">

            <FaMapMarkerAlt />

            <span>{hotel.address}</span>

          </div>

        </div>

        <div className="flex gap-3">

          <button className="rounded-full border p-3 hover:bg-slate-100">
            <FaHeart />
          </button>

          <button className="rounded-full border p-3 hover:bg-slate-100">
            <FaShareAlt />
          </button>

        </div>

      </div>

      {/* Badges */}

      <div className="flex flex-wrap gap-4">

        {hotel.verified && (
          <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">

            <FaCheckCircle />

            <span>Verified Hotel</span>

          </div>
        )}

        <div className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
          🤖 Reality Score {hotel.realityScore}%
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-2">
          🏨 {hotel.type}
        </div>

      </div>

      {/* Check In / Out */}

      <div className="grid gap-4 md:grid-cols-2">

        <div className="flex items-center gap-3 rounded-2xl border p-5">

          <FaClock className="text-blue-600" />

          <div>

            <p className="text-sm text-slate-500">
              Check-In
            </p>

            <h3 className="font-semibold">
              {hotel.checkIn}
            </h3>

          </div>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border p-5">

          <FaClock className="text-blue-600" />

          <div>

            <p className="text-sm text-slate-500">
              Check-Out
            </p>

            <h3 className="font-semibold">
              {hotel.checkOut}
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HotelInfo;