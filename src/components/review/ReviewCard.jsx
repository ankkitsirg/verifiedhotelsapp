import Rating from "@/components/ui/Rating";
import RealityScore from "@/components/ui/RealityScore";

function ReviewCard({ review }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <Rating value={review.rating} />

        <RealityScore score={review.realityScore} />
      </div>

      <p className="mt-5 leading-7 text-gray-600">
        "{review.review}"
      </p>

      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold">
          {review.name}
        </h3>

        <p className="text-sm text-gray-500">
          {review.hotel}
        </p>

        <p className="text-sm text-gray-400">
          {review.date}
        </p>
      </div>
    </article>
  );
}

export default ReviewCard;