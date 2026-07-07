import { useMemo, useState } from "react";

import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
function BookingCard({ hotel }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState(2);
const navigate = useNavigate();
  const taxes = Math.round(hotel.price * 0.12);

  const serviceFee = 250;

  const total = useMemo(() => {
    return hotel.price + taxes + serviceFee;
  }, [hotel.price, taxes]);

function handleBooking() {
  if (!checkIn || !checkOut) {
    alert("Please select Check-In and Check-Out dates.");
    return;
  }

  navigate(`/booking/${hotel.id}`, {
    state: {
      hotelId: hotel.id,
      checkIn,
      checkOut,
      guests,
    },
  });
}
  return (
    <aside className="sticky top-28 rounded-3xl border bg-white p-6 shadow-xl">

      <div className="mb-6">

        <h2 className="text-4xl font-bold">
          ₹{hotel.price.toLocaleString()}
        </h2>

        <p className="text-slate-500">
          per night
        </p>

      </div>

      <div className="mb-6 flex items-center gap-2">

        <span className="text-yellow-500">
          ⭐
        </span>

        <span className="font-semibold">
          {hotel.rating}
        </span>

        <span className="text-slate-500">
          ({hotel.reviews} reviews)
        </span>

      </div>

      {/* Dates */}

      <div className="space-y-4">

        <div>

          <label className="mb-1 block text-sm font-medium">
            Check-In
          </label>

          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-1 block text-sm font-medium">
            Check-Out
          </label>

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

        </div>

      </div>

      {/* Guests */}

      <div className="my-6">

        <label className="mb-1 block text-sm font-medium">
          Guests
        </label>

        <select
          value={guests}
          onChange={(e) =>
            setGuests(Number(e.target.value))
          }
          className="w-full rounded-xl border p-3"
        >
          {[1, 2, 3, 4, 5, 6].map((guest) => (
            <option
              key={guest}
              value={guest}
            >
              {guest} Guest{guest > 1 ? "s" : ""}
            </option>
          ))}
        </select>

      </div>

      {/* Price Details */}

      <div className="space-y-3 border-y py-5">

        <div className="flex justify-between">

          <span>1 Night</span>

          <span>
            ₹{hotel.price.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Taxes</span>

          <span>
            ₹{taxes.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Service Fee</span>

          <span>
            ₹{serviceFee}
          </span>

        </div>

      </div>

      {/* Total */}

      <div className="my-6 flex justify-between text-xl font-bold">

        <span>Total</span>

        <span>
          ₹{total.toLocaleString()}
        </span>

      </div>

      <Button
        fullWidth
        size="lg"
         onClick={handleBooking}
      >
        Book Now
      </Button>

      <p className="mt-4 text-center text-sm text-slate-500">
        🔒 Secure booking • Free cancellation
      </p>

    </aside>
  );
}

export default BookingCard;