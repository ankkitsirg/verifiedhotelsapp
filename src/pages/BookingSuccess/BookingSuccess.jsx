import { Link, useLocation } from "react-router-dom";

import Button from "@/components/ui/Button";

function BookingSuccess() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="py-40 text-center">
        Booking not found.
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-16">

      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-xl">

        <div className="text-center">

          <div className="mb-6 text-7xl">
            ✅
          </div>

          <h1 className="text-4xl font-bold text-green-600">
            Booking Confirmed
          </h1>

          <p className="mt-4 text-slate-600">
            Thank you for booking with us.
          </p>

        </div>

        <div className="my-10 space-y-4 rounded-2xl bg-slate-50 p-6">

          <div className="flex justify-between">
            <span>Booking ID</span>
            <strong>{state.bookingId}</strong>
          </div>

          <div className="flex justify-between">
            <span>Hotel</span>
            <strong>{state.hotel.name}</strong>
          </div>

          <div className="flex justify-between">
            <span>City</span>
            <strong>{state.hotel.city}</strong>
          </div>

          <div className="flex justify-between">
            <span>Check-In</span>
            <strong>{state.booking.checkIn}</strong>
          </div>

          <div className="flex justify-between">
            <span>Check-Out</span>
            <strong>{state.booking.checkOut}</strong>
          </div>

          <div className="flex justify-between">
            <span>Guests</span>
            <strong>{state.booking.guests}</strong>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total Paid</span>
            <span>₹{state.total.toLocaleString()}</span>
          </div>

        </div>

        <div className="flex justify-center gap-4">

          <Link to="/">
            <Button variant="secondary">
              Home
            </Button>
          </Link>

          <Link to="/hotels">
            <Button>
              Explore Hotels
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default BookingSuccess;