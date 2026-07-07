import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaDumbbell,
  FaCoffee,
  FaCheckCircle,
} from "react-icons/fa";

const icons = {
  wifi: <FaWifi />,
  pool: <FaSwimmingPool />,
  parking: <FaParking />,
  gym: <FaDumbbell />,
  breakfast: <FaCoffee />,
};

const labels = {
  wifi: "Free Wi-Fi",
  pool: "Swimming Pool",
  parking: "Free Parking",
  gym: "Fitness Center",
  breakfast: "Breakfast Included",
};

function Amenities({ hotel }) {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-bold">
        Amenities
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {hotel.amenities.map((amenity) => (
          <div
            key={amenity}
            className="flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="text-2xl text-blue-600">
              {icons[amenity]}
            </div>

            <div>

              <p className="font-semibold">
                {labels[amenity]}
              </p>

              <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                <FaCheckCircle />

                Available
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Amenities;