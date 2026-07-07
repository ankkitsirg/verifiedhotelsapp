import { useState } from "react";

function AboutHotel({ hotel }) {
  const [expanded, setExpanded] = useState(false);

  const description = hotel.description;

  const shortDescription =
    description.length > 220
      ? description.slice(0, 220) + "..."
      : description;

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="mb-5 text-3xl font-bold">
        About this Hotel
      </h2>

      <p className="leading-8 text-slate-600">
        {expanded ? description : shortDescription}
      </p>

      {description.length > 220 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}

    </section>
  );
}

export default AboutHotel;