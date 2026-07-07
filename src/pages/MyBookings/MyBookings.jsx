import { bookings } from "@/data/bookings";

import BookingCard from "./sections/BookingHistoryCard";

function MyBookings() {
  return (
    <section className="bg-slate-50 py-12">

      <div className="mx-auto max-w-7xl px-4">

        <h1 className="mb-10 text-4xl font-bold">
          My Bookings
        </h1>

        <div className="space-y-8">

          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default MyBookings;