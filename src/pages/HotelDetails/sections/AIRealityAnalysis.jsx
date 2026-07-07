function ProgressBar({
  label,
  value,
}) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <span className="font-medium">
          {label}
        </span>

        <span className="font-semibold">
          {value}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}

function AIRealityAnalysis({ hotel }) {
  const analysis = hotel.aiAnalysis;

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <span className="text-4xl">
          🤖
        </span>

        <div>

          <h2 className="text-3xl font-bold">
            AI Reality Analysis
          </h2>

          <p className="text-slate-500">
            AI verified hotel authenticity
          </p>

        </div>

      </div>

      {/* Overall Score */}

      <div className="mb-10 rounded-2xl bg-blue-50 p-6 text-center">

        <p className="text-lg text-slate-500">
          Overall Reality Score
        </p>

        <h3 className="mt-2 text-6xl font-bold text-blue-600">
          {hotel.realityScore}%
        </h3>

      </div>

      {/* Analysis */}

      <div className="space-y-6">

        <ProgressBar
          label="Room Accuracy"
          value={analysis.roomAccuracy}
        />

        <ProgressBar
          label="Cleanliness"
          value={analysis.cleanliness}
        />

        <ProgressBar
          label="Service"
          value={analysis.service}
        />

        <ProgressBar
          label="Amenities"
          value={analysis.amenities}
        />

        <ProgressBar
          label="Location"
          value={analysis.location}
        />

      </div>

      {/* Summary */}

      <div className="mt-10 rounded-2xl border-l-4 border-green-600 bg-green-50 p-5">

        <h3 className="mb-3 text-xl font-semibold text-green-700">
          AI Summary
        </h3>

        <ul className="space-y-2 text-slate-600">

          <li>
            ✅ Room photos closely match guest uploads.
          </li>

          <li>
            ✅ Amenities appear consistently available.
          </li>

          <li>
            ✅ Guest reviews align with AI analysis.
          </li>

          <li>
            ✅ Excellent cleanliness and service quality.
          </li>

        </ul>

      </div>

    </section>
  );
}

export default AIRealityAnalysis;