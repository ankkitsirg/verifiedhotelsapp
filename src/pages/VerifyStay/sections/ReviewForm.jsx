import { useState } from "react";

function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Your Review
      </h2>

      <label className="mb-2 block font-medium">
        Overall Rating
      </label>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="mb-6 w-full rounded-xl border p-3"
      >
        {[5,4,3,2,1].map((star) => (
          <option key={star} value={star}>
            {star} Star
          </option>
        ))}
      </select>

      <label className="mb-2 block font-medium">
        Write Review
      </label>

      <textarea
        rows={6}
        value={review}
        onChange={(e)=>setReview(e.target.value)}
        placeholder="Tell other travellers about your stay..."
        className="w-full rounded-xl border p-4"
      />

    </div>
  );
}

export default ReviewForm;