import { FaStar, FaThumbsUp, FaCheckCircle } from "react-icons/fa";

function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {review.name}
          </h3>

          <p className="text-sm text-gray-500">
            Stayed: {review.date}
          </p>

        </div>

        {review.verified && (
          <div className="flex items-center gap-2 text-green-600">
            <FaCheckCircle />
            Verified Stay
          </div>
        )}

      </div>

      <div className="my-4 flex gap-1">

        {Array.from({ length: review.rating }).map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-500"
          />
        ))}

      </div>

      <p className="leading-7 text-gray-600">
        {review.review}
      </p>

      <div className="mt-5 flex items-center gap-2 text-gray-500">

        <FaThumbsUp />

        Helpful ({review.helpful})

      </div>

    </div>
  );
}

export default ReviewCard;