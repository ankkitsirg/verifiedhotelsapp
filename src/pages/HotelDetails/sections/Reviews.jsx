import { reviews } from "@/data/reviews";

import ReviewCard from "@/components/hotel/ReviewCard";

function Reviews({ hotel }) {
  const hotelReviews = reviews.filter(
    (review) => review.hotelId === hotel.id
  );

  return (
    <section>

      <h2 className="mb-8 text-3xl font-bold">
        Guest Reviews
      </h2>

      <div className="space-y-6">

        {hotelReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}

      </div>

    </section>
  );
}

export default Reviews;