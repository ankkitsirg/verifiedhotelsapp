function RealityQuestions() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-8 text-2xl font-bold">
        Reality Verification
      </h2>

      <div className="space-y-6">

        <div>
          <label className="mb-2 block font-medium">
            Did the room match the official photos?
          </label>

          <select className="w-full rounded-xl border p-3">
            <option>Exactly</option>
            <option>Mostly</option>
            <option>Partially</option>
            <option>Not at all</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Were the amenities available?
          </label>

          <select className="w-full rounded-xl border p-3">
            <option>Yes</option>
            <option>Some Missing</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Would you recommend this hotel?
          </label>

          <select className="w-full rounded-xl border p-3">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default RealityQuestions;