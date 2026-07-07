import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

function BookingCard({ booking }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-lg md:flex-row">

      <img
        src={booking.image}
        alt={booking.hotelName}
        className="h-52 w-full rounded-2xl object-cover md:w-80"
      />

      <div className="flex flex-1 flex-col justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            {booking.hotelName}
          </h2>

          <p className="mt-2 text-slate-500">
            {booking.city}
          </p>

          <p className="mt-5">
            Check-In : {booking.checkIn}
          </p>

          <p>
            Check-Out : {booking.checkOut}
          </p>

          <p>
            Guests : {booking.guests}
          </p>

          <p className="mt-4">
            Status :

            <span className="ml-2 font-semibold text-green-600">
              {booking.status}
            </span>

          </p>

        </div>

        <div className="mt-6">

          {booking.status === "Completed" &&
            !booking.verified && (

              <Link
                to={`/verify/${booking.id}`}
              >
                <Button>
                  Verify Your Stay
                </Button>
              </Link>

            )}

        </div>

      </div>

    </div>
  );
}

export default BookingCard;