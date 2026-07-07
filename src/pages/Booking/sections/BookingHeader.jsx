function BookingHeader({ hotel }) {
  return (
    <section className="border-b bg-white py-10">

      <div className="mx-auto max-w-7xl px-4">

        <h1 className="text-4xl font-bold">
          Complete Your Booking
        </h1>

        <p className="mt-3 text-slate-600">
          {hotel.name} • {hotel.city}
        </p>

      </div>

    </section>
  );
}

export default BookingHeader;