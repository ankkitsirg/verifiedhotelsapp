import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
function BookingSummary({ hotel, bookingData }) {
  const checkIn = new Date(bookingData.checkIn);
  const checkOut = new Date(bookingData.checkOut);
  const navigate = useNavigate();
  const nights = Math.max(
    1,
    Math.ceil(
      (checkOut - checkIn) / (1000 * 60 * 60 * 24)
    )
  );

  const roomTotal = hotel.price * nights;

  const taxes = Math.round(roomTotal * 0.12);

  const serviceFee = 250;

  const total = roomTotal + taxes + serviceFee;

  function handleBooking() {
    const bookingId =
      "BK" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    navigate("/booking-success", {
      state: {
        bookingId,

        hotel,

        booking: bookingData,

        total,
      },
    });
  }

  return (
    <aside className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg">

      <img
        src={hotel.image}
        alt={hotel.name}
        className="mb-5 h-52 w-full rounded-2xl object-cover"
      />

      <h2 className="text-2xl font-bold">
        {hotel.name}
      </h2>

      <p className="mb-6 text-slate-500">
        {hotel.city}
      </p>

      <div className="space-y-3 border-b pb-5">

        <div className="flex justify-between">
          <span>Check-In</span>
          <strong>{bookingData.checkIn}</strong>
        </div>

        <div className="flex justify-between">
          <span>Check-Out</span>
          <strong>{bookingData.checkOut}</strong>
        </div>

        <div className="flex justify-between">
          <span>Guests</span>
          <strong>{bookingData.guests}</strong>
        </div>

        <div className="flex justify-between">
          <span>Nights</span>
          <strong>{nights}</strong>
        </div>

      </div>

      <div className="space-y-3 py-5 border-b">

        <div className="flex justify-between">
          <span>Room Charges</span>
          <span>₹{roomTotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹{taxes.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>₹{serviceFee}</span>
        </div>

      </div>

      <div className="my-6 flex justify-between text-2xl font-bold">

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
        Confirm Booking
      </Button>

    </aside>
  );
}

export default BookingSummary;